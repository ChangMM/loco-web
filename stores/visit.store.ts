import { useMemo } from 'react'
import { Visit } from '@generated/types'
import { useLocalStorage, getLocalStorage } from '@common/stook-localstorage'

const key = 'Visit'

export function useVisit() {
  const [visit, setVisit] = useLocalStorage<Visit>(key)

  // 没有任何项目的 team
  const isEmptyTeam: boolean | null = useMemo(() => {
    if (!visit) return null
    const { teamId, tableId, viewId } = visit
    return !!teamId && !tableId && !viewId
  }, [visit])

  return { visit, ...visit, isEmptyTeam, setVisit }
}

export function getVisit(): Visit {
  return getLocalStorage(key)
}
