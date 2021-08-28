import { useCallback } from "react"
import debounce from 'lodash/debounce'
import { apiService } from "@generated/api"
import { Cell } from "@generated/types"

/**
 * 更新单元格
 * @param cb 调用接口更新后的回调
 */
export function useDebounceSyncCell(cb?: (cell?: Cell) => any, t = 300) {
  return useCallback(debounce(async (cell: Cell, data: string) => {
    const { id } = cell
    try {
      const cell = await apiService.updateCell(
        {
          where: { id },
          data: { data }
        }
      )
      cb && cb(cell)
    } catch (e) {
      console.log('更新失败')
    }
  }, t), [])
}
