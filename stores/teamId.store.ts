import { mutate, getState, useStore } from 'stook'

const key = 'TeamId'

export function useTeamId() {
  const [teamId, setTeamId] = useStore<number>(key)

  return { teamId, setTeamId }
}

export function mutateTeamId(id: number) {
  return mutate(key, id)
}

export function getTeamId(): number {
  return getState(key)
}
