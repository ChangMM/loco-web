import React, { memo, useCallback, useRef, useState } from 'react'
import isEqual from 'react-fast-compare'
import { Cell, FieldType, ViewColumn } from '@generated/types'
import { SingleLineTextCell } from './SingleLineText'
import { LongTextCell } from './LongText'
import { CreatedAtCell } from './CreatedAt'
import { UpdatedAtCell } from './UpdatedAt'
import { CreatedByCell } from './CreatedBy'
import { LastUpdatedByCell } from './LastUpdatedBy'
import { SingleSelect } from './SingleSelect'
import { apiService } from '@generated/api'
import { Cell as CellType } from '@generated/types'
import { useStore } from 'stook'
import { motion } from 'framer-motion'
import { styled } from '@fower/styled'
import { mutateSaving } from '@stores/saving.store'
import { CollaboratorCell } from './Collaborator'
import { useOutsideClick } from '@bone-ui/hooks'
import { LocaleCell } from './Locale'
import { KeyCell } from './Key'
import { NamespaceCell } from './Namespace'
import { useReadonly } from '@stores/readonly.store'

const Motion = motion(styled('div'))

const cellsMap: Record<FieldType, any> = {
  Locale: LocaleCell,
  Key: KeyCell,
  Namespace: NamespaceCell,
  SingleLineText: SingleLineTextCell,
  LongText: LongTextCell,
  SingleSelect,
  Collaborator: CollaboratorCell,
  CreatedAt: CreatedAtCell,
  UpdatedAt: UpdatedAtCell,
  CreatedBy: CreatedByCell,
  LastUpdatedBy: LastUpdatedByCell,
}

interface Props {
  viewColumn: ViewColumn
  index: number
  cell: Cell
}

// eslint-disable-next-line react/display-name
export const GridCell = memo(
  (props: Props) => {
    const { cell, index, viewColumn } = props
    const [selected, setSelected] = useState(false)
    const [editable, setEditable] = useState(false)
    const { readonly } = useReadonly()
    const ref = useRef<HTMLDivElement>(null)

    useOutsideClick({
      ref,
      handler(e) {
        setSelected(false)
        setEditable(false)
      },
    })

    const updateCell = useCallback(async ({ columnId, rowId, data }: CellType) => {
      if (data === cell.data) return

      try {
        mutateSaving(true)
        await apiService.modifyCell({
          columnId,
          rowId,
          data: data ? JSON.stringify({ value: data }) : null,
        })
        mutateSaving(false)
      } catch (e) {
        mutateSaving(false)
        console.log('更新表格失败', e)
      }
    }, [])

    // 从 store 中获取宽度，可以看 GridHeaderItem 组件，这样做的目的是调整宽度是不重新渲染 table
    const [width = viewColumn.width] = useStore(viewColumn.id)

    if (!cell?.fieldType) return null

    const { fieldType, rowId, columnId } = cell
    const CellComponent = cellsMap[fieldType as FieldType]

    function onClick() {
      setSelected(true)
    }

    function onDbClick() {
      if (readonly) return // 只读，不能双击编辑
      setEditable(true)
    }

    if (!CellComponent) return null

    return (
      <Motion
        ref={ref}
        className="grid-cell"
        tabIndex={0}
        onClick={onClick}
        onDoubleClick={onDbClick}
        data-pos={`${rowId}:${columnId}`}
        w={width}
        h-100p
        sticky={index === 0}
        zIndex-100={index === 0}
        zIndex={selected ? '1000 !important' : false}
        rounded-1={selected}
        // bgWhite={selected}
        bgWhite
        shadow={selected ? '0 0 0 2px #4fd1c5' : false}
        relative
        h-120={editable && viewColumn.column.fieldType === FieldType.Locale}
        borderRight
        borderBottom
        flexShrink={0}
        style={{ width }}
      >
        <CellComponent
          {...props}
          selected={selected}
          editable={editable}
          updateCell={updateCell}
          width={width}
        ></CellComponent>
      </Motion>
    )
  },
  (prev, next) => {
    return isEqual(
      {
        cell: prev.cell,
        viewColumn: prev.viewColumn,
      },
      {
        cell: next.cell,
        viewColumn: next.viewColumn,
      },
    )
  },
)
