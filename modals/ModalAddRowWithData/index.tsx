import React, { useEffect } from 'react'
import { Form, Field, useForm } from '@formy/react'
import { Button } from '@bone-ui/button'
import { modalService } from '@generated/modalService'
import { apiService } from '@generated/api'
import { FieldLabel } from './FieldLabel'
import { fieldMaps } from '@common/fieldMaps'
import { mappedBykey } from '@common/utils'
import { refecthTable, useTable } from '@stores/table.store'
import { toast } from '@bone-ui/toast'
import { Box } from '@fower/react'
import { useVisit } from '@stores/visit.store'

interface ModalData {
  optionId: string
  rowId: string
}

const ModalAddRowWithData = () => {
  const { tableId } = useVisit()
  const { data } = modalService.getModalAddRowWithData<ModalData>()
  const { optionId, rowId } = (data || {}) as ModalData
  const { rowsMap, columns, view } = useTable()
  const stackedColumnId: string = view?.stackedColumnId as any

  const formHook = useForm<any>({
    initialValues: { [`${stackedColumnId}`]: optionId },
    async onSubmit(values) {
      rowId ? editRow(values) : addRow(values)
      await refecthTable({ id: tableId })
      modalService.closeModalAddRowWithData()
    },
  })

  useEffect(() => {
    formHook.setFieldState(`${stackedColumnId}`, { value: optionId })
  }, [optionId])

  async function addRow(values: any) {
    const cells = Object.entries(values).map(([key, value]) => {
      const data = value ? JSON.stringify({ value }) : null
      return {
        columnId: key,
        fieldType: mappedBykey(columns)[key].fieldType,
        data,
      }
    })
    try {
      // TODO: 接口有点问题
      await apiService.addRowWithData({
        tableId,
        cells,
      })
    } catch (e) {
      toast.error(e.message)
    }
  }

  async function editRow(values: any) {
    const cells = Object.entries(values).map(([key, value]) => {
      const data = value ? JSON.stringify({ value }) : null
      return {
        columnId: key,
        rowId,
        data,
      }
    })
    try {
      await apiService.modifyRow({ cells })
    } catch (e) {
      toast.error(e.message)
    }
  }

  return (
    <Box pt-50>
      <Form hook={formHook}>
        {columns.map((column) => {
          const { fieldType, name, id } = column
          const options = column.options.map((i) => ({
            label: i.name,
            value: i.id,
            color: i.color,
          }))

          // 找到当前单元格数据
          const currentCell = rowsMap[rowId]?.cells?.find((cell) => cell.columnId === id)
          const { data: cellData } = currentCell || {}

          return (
            <Field
              key={column.id}
              name={`${column.id}`}
              options={options}
              value={cellData || ''}
              component={fieldMaps[fieldType]}
              label={<FieldLabel text={name} fieldType={fieldType} />}
            />
          )
        })}
        <Button w-100p type="submit">
          提交
        </Button>
      </Form>
    </Box>
  )
}

ModalAddRowWithData.modalProps = {
  footer: null,
}

export default ModalAddRowWithData
