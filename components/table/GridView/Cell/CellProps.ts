import { Cell } from '@generated/types'

export interface CellProps {
  selected: boolean
  editable: boolean
  cell: Cell
  width: number
  updateCell: (cell: Cell) => void
}
