import { Form, Field } from '@formy/react'
import { Button } from '@bone-ui/button'
import { modalService } from '@generated/modalService'
import { FieldType, Row, ViewColumn } from '@generated/types'
import { apiService } from '@generated/api'
import { FieldLabel } from './FieldLabel'
import { fieldMaps } from '@common/fieldMaps'
import { refecthTable, useTable } from '@stores/table.store'
import { nanoid } from 'nanoid'

const ModalFormTable = () => {
  const { loadingTable, viewColumns, table } = useTable()
  const { data: row } = modalService.getModalFormTable<Row>()

  const viewColumnsMap = viewColumns.reduce<Record<string, ViewColumn>>(
    (result, item) => ({ ...result, [item.columnId]: item }),
    {},
  )

  if (loadingTable) return null
  return (
    <div>
      <Form<any>
        onSubmit={async (values) => {
          const data = Object.keys(values).map((key) => ({
            id: key,
            data: values[key] ? JSON.stringify({ value: values[key] }) : null,
          }))
          // await apiService.modifyRow({ cells: data })

          refecthTable({ id: table.id })
          modalService.closeModalFormTable()
        }}
      >
        {row.cells.map((cell) => {
          const viewColumn = viewColumnsMap[cell.columnId]
          const { fieldType, name, id } = viewColumn.column

          const options = viewColumn.column.options.map((i) => ({
            label: i.name,
            value: i.id,
            color: i.color,
          }))

          // TODO: 需要重构
          const componentProps: any = {}
          if (fieldType === FieldType.SingleSelect) {
            componentProps.onCreate = async (value: any) => {
              await apiService.createOption({
                id: nanoid(),
                columnId: id,
                name: value,
                color: 'red400', //TODO:
              })
              refecthTable({ id: table.id })
            }
          }

          return (
            <Field
              key={cell.id}
              name={`${cell.id}`}
              options={options}
              value={cell.data}
              component={fieldMaps[fieldType]}
              componentProps={componentProps}
              label={<FieldLabel text={name} fieldType={fieldType} />}
            />
          )
        })}
        <Button w-100p mt4 type="submit">
          提交
        </Button>
      </Form>
    </div>
  )
}

ModalFormTable.modalProps = {
  footer: null,
}

export default ModalFormTable
