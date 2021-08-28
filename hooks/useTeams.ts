import { Hooks } from '@generated/hooks'

export function useTeams() {
  const result = Hooks.useOwnedTeams({}, {})
  return result
}
