import { Hooks } from '@generated/hooks'
import { useVisit } from '@stores/visit.store'

export function useMembers() {
  const { visit } = useVisit()
  const result = Hooks.useMembers(() => {
    const { teamId } = visit
    if (!teamId) throw new Error()
    return { where: { teamId } }
  })

  return result
}
