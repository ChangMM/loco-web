import React, { useState, FC, Dispatch, SetStateAction } from 'react'
import { createPortal } from 'react-dom'
import {
  closestCorners,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { KanbanItem } from './KanbanItem'
import { Cell, Option, Row } from '@generated/types'
import { mutateCellData, sortRowsById, sortRowsBySort } from '@stores/table.store'
import { last } from '@bone-ui/utils'

type Items = Record<string, string[]>

interface Props {
  stackedColumnId: string
  options: Option[]
  rows: Row[]
  items: Items
  setItems: Dispatch<SetStateAction<Items>>
}

interface Event {
  type: 'over' | 'end'
  newIndex?: number // 跨容器拖拽时的新下标
  overItemsLength?: number // 目标容器元素个数
  overItems: string[]
  isBelowLastItem?: boolean
  activeContainer?: string
  overContainer?: string
  active: DragOverEvent['active']
  over: DragOverEvent['over'] | DragEndEvent['over']
}

export const DndContextContainer: FC<Props> = (props) => {
  const { children, stackedColumnId, options, rows, items, setItems } = props
  const [dragOverlaydItems, setClonedItems] = useState<Items | null>(null)
  const [activeId, setActiveId] = useState<string | null>(null)

  const [events, setEvents] = useState<Event[]>([])

  function onDragOver(event: DragOverEvent) {
    // const { active, over, draggingRect } = event
    const { active, over } = event
    const overId = over?.id as string
    const activeContainer = findContainer(items, active.id)
    const overContainer = findContainer(items, overId)

    if (!overContainer || !activeContainer) return

    if (activeContainer === overContainer) return

    const activeItems = items[activeContainer]
    const overItems = items[overContainer]

    const overIndex = overItems.indexOf(overId)
    const activeIndex = activeItems.indexOf(active.id)

    /** 是否在最后一个元素下面 */
    // const isBelowLastItem: boolean =
    //   !!over &&
    //   overIndex === overItems.length - 1 &&
    //   draggingRect.offsetTop > over.rect.offsetTop + over.rect.height

    const isBelowLastItem: boolean = !!over && overIndex === overItems.length - 1

    const overItemsLength = overItems.length // 目标容器的元素个数

    /**
     *
     * 获取目标容器分隔临界点 index
     * 这里比较复杂
     */
    const getNewIndex = () => {
      /**
       * 是否是over在某个元素上面
       * 那什么时候会不在某个元素上面呢？有两种情况：1.目标容器为空；2.直接拖拽到目标容器最下面
       */
      const isOverOnItem = overIndex >= 0

      /** 拖拽到目标容器最底部 */
      if (isBelowLastItem) {
        return isOverOnItem ? overIndex + 1 : overItemsLength + 1
      }

      return isOverOnItem ? overIndex : overItemsLength + 1
    }

    const newIndex = getNewIndex()

    setEvents((events) => {
      return [
        ...events,
        {
          type: 'over',
          newIndex,
          isBelowLastItem,
          overItemsLength,
          overItems: getOverItems(items, overContainer),
          activeContainer,
          overContainer,
          active,
          over,
        },
      ]
    })

    /** 跨容器拖拽 */
    setItems((items) => {
      const newItems = {
        ...items,
        // 被拖拽的容器去掉被拖拽的 item
        [activeContainer]: items[activeContainer].filter((item) => item !== active.id),

        // 目标容器
        [overContainer]: [
          ...items[overContainer].slice(0, newIndex), // 从开头到index
          items[activeContainer][activeIndex], // 被拖拽的item，插在中间
          ...items[overContainer].slice(newIndex, items[overContainer].length), //  从 index 到结尾
        ],
      }

      return newItems
    })
  }

  function onDragEnd(event: DragEndEvent) {
    const { active, over } = event
    const overId = over?.id
    const activeContainer = findContainer(items, active.id)
    const overContainer = findContainer(items, overId)
    let endedEvents: Event[] = events

    let endEvent: Event = {
      type: 'end',
      active,
      over,
      overItems: getOverItems(items, overContainer),
      activeContainer,
      overContainer,
    }

    /** 不存在激活的容器，一般不会出现这种情况 */
    if (!activeContainer) {
      setActiveId(null)
      return
    }

    /** 是有效的拖拽卡片行为 */
    if (activeContainer && overContainer) {
      const activeIndex = items[activeContainer].indexOf(active.id)
      const overIndex = items[overContainer].indexOf(overId || '')

      /** 在同一容器内移动 */
      if (activeIndex !== overIndex) {
        setItems((items) => {
          const newItems = {
            ...items,
            [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex),
          }
          endEvent.overItems = getOverItems(newItems, overContainer)
          return newItems
        })
      } else {
        endEvent.overItems = getOverItems(items, overContainer)
      }
    } else {
      endEvent.overItems = getOverItems(items, overContainer)
    }

    // 增加 end event 到列表
    endedEvents = [...endedEvents, endEvent]

    console.log('endedEvents:', endedEvents)

    /** 保存拖拽结果到服务端 */
    saveToServer(endedEvents)

    setEvents([])
    setActiveId(null)
  }

  function onDragCancel() {
    if (dragOverlaydItems) {
      setItems(dragOverlaydItems)
    }

    setActiveId(null)
    setClonedItems(null)
  }

  function onDragStart({ active }: DragStartEvent) {
    setActiveId(active.id)
    setClonedItems(items)
  }

  /**
   *
   * @param activeId 被拖拽的容器
   * @param overContainer 目标容器
   */
  function mutateCellOption(activeId: string, overContainer = '') {
    let optionId: any

    if (overContainer === 'uncategorized') {
      optionId = null
    } else {
      const option = options.find((o) => o.id === overContainer) as Option
      optionId = option.id
    }

    const row = rows.find((r) => r.id === activeId)
    const cell = row?.cells.find((c) => c.columnId === stackedColumnId) as Cell
    if (!cell) return

    mutateCellData(cell, optionId)
  }

  /**
   * 保存拖拽结果到服务端
   * @param events
   */
  function saveToServer(events: Event[]) {
    if (!events.length) return // 没有拖拽行为

    /** 单个容器内拖拽 */
    if (isDragInSingleContainer(events)) {
      const event = last(events) as Event

      // 无效拖拽
      if (event.over?.id === event.overContainer) return
      sortRowsByEvent(event, true)
      return
    }

    /** 下面处理跨容器 */

    const lastItem = last(events) as Event
    const index = lastItem.overItems?.indexOf(lastItem.active.id)
    const activeSort = getSortByRowId(rows, lastItem.active.id)
    const prevSort = getSortByRowId(rows, lastItem.overItems[index - 1])
    const nextSort = getSortByRowId(rows, lastItem.overItems[index + 1])

    // 加个定时器，减少渲染卡顿
    // TODO: 这里比较复杂，建议多点注释
    setTimeout(() => {
      if (index === 0 /** 插在最前面 */) {
        if (activeSort > nextSort) {
          sortRowsBySort(activeSort, nextSort)
        }
      } else if (index === lastItem.overItems.length - 1 /** 插在尾部 */) {
        if (activeSort < prevSort) {
          sortRowsBySort(activeSort, prevSort)
        }
      } /** 插入在中间某个部位 */ else {
        if (activeSort < prevSort && activeSort < nextSort) {
          sortRowsBySort(activeSort, prevSort)
        } else if (activeSort > prevSort && activeSort > nextSort) {
          sortRowsBySort(activeSort, nextSort)
        } else if (activeSort > prevSort && activeSort < nextSort) {
          // 刚好在中间, 排序不用修改
        } else {
          console.log('其他....。。。.')
        }
      }

      // 统一修改 option
      mutateCellOption(lastItem.active.id, lastItem.overContainer)
    }, 10)
  }

  return (
    <DndContext
      collisionDetection={closestCorners}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onDragCancel={onDragCancel}
    >
      <div>{children}</div>
      {createPortal(
        <DragOverlay adjustScale={false} zIndex={20000}>
          {activeId ? <KanbanItem rowId={activeId} dragOverlay /> : null}
        </DragOverlay>,
        document.body,
      )}
    </DndContext>
  )
}

/**
 * 目标容器的元素
 * @param items
 * @param overContainer
 */
function getOverItems(items: Items, overContainer = ''): string[] {
  if (!overContainer) return []
  return items[overContainer] || []
}

/**
 * 获取容器 ID
 * @param items
 * @param id
 */
function findContainer(items: Items, id = '') {
  if (id in items) return id

  return Object.keys(items).find((key) => items[key].includes(id))
}

/**
 * 是否在单个容器内拖拽
 * @param events
 */
function isDragInSingleContainer(events: Event[]) {
  // events 只有一个时，肯定是单容器拖拽
  if (events.length === 1) return true

  const [firstEvent] = events
  const lastEvent = last(events)
  return firstEvent.activeContainer === lastEvent?.activeContainer
}

/**
 * 获取元素的 row 排序
 * @param rows
 * @param id rowId
 */

function getSortByRowId(rows: Row[], id: string): number {
  const row = rows.find((r) => r.id === id) as Row
  return row?.sortBaseTable
}

/**
 * 服务端排序
 * @param event
 * @param enableTimeout 是否需要定时器
 */
function sortRowsByEvent(event?: Event, enableTimeout?: boolean) {
  if (!event) return
  const { active, over } = event as Event
  if (active.id === over?.id) return
  if (!enableTimeout) return sortRowsById(active.id, over?.id || '')

  // 定时器，减少拖拽渲染卡顿
  setTimeout(() => {
    sortRowsById(active.id, over?.id || '')
  }, 10)
}
