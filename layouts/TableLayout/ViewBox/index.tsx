import React, { useRef, useState } from 'react'
import { Input } from '@bone-ui/input'
import { ViewSelect } from './ViewSelect'
import { refecthTable, useTable } from '@stores/table.store'
import { apiService } from '@generated/api'
import { Box } from '@fower/react'
import { View } from '@generated/types'
import { useVisit } from '@stores/visit.store'
import { useRouter } from 'next/router'
import { ViewSkeleton } from './ViewSkeleton'

export const ViewBox = () => {
  const [editing, setEditing] = useState(false)
  const { teamId, tableId, viewId, visit, setVisit } = useVisit()
  const ref = useRef<HTMLInputElement>(null)
  const { view, loadingTable } = useTable()
  const { push } = useRouter()

  async function save() {
    setEditing(false)
    await apiService.updateView({
      where: { id: viewId },
      data: { name: ref.current?.value },
    })

    refecthTable({ id: tableId, showLoading: false })
  }

  function remove() {}

  async function selectView(item: View) {
    if (item.id === viewId) return
    push(`/t/${teamId}?tableId=${tableId}&viewId=${item.id}`)
    setTimeout(() => {
      setVisit({
        ...visit,
        viewId: item.id,
        viewType: item.type,
      })
    }, 0)
    await apiService.modifyVisit({
      id: visit.id,
      teamId: visit.teamId,
      tableId: visit.tableId,
      viewId: item.id,
      viewType: item.type,
    })
  }

  if (loadingTable) {
    return <ViewSkeleton></ViewSkeleton>
  }
  return (
    <Box toCenterY spaceX1 h-100p>
      {!editing && <ViewSelect onSelectView={selectView} selectedViewId={viewId}></ViewSelect>}

      {editing && (
        <Input
          ref={ref}
          autoFocus
          defaultValue={view.name}
          onKeyDown={(e) => {
            if (e.key === 'Enter') save()
          }}
          onBlur={save}
          size="sm"
          w-160
        ></Input>
      )}
    </Box>
  )
}
