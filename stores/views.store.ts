import { Hooks } from '@generated/hooks'
import { useVisit } from './visit.store'

export function useViews() {
  const { tableId } = useVisit()
  return Hooks.useViews({ where: { tableId } })
}
