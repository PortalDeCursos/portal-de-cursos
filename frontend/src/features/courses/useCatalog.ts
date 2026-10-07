import { useEffect, useState } from 'react'
import type { CatalogCourse } from './catalogTypes'
type CatalogState = { status: 'loading'; courses: CatalogCourse[] } | { status: 'success'; courses: CatalogCourse[] } | { status: 'error'; courses: CatalogCourse[] }
export default function useCatalog() {
  const [attempt, setAttempt] = useState(0)
  const [state, setState] = useState<CatalogState>({ status: 'loading', courses: [] })
  useEffect(() => {
    let active = true
    import('../../mocks/catalog').then(module => {
      if (active) setState({ status: 'success', courses: module.catalogCourses })
    }).catch(() => {
      if (active) setState({ status: 'error', courses: [] })
    })
    return () => { active = false }
  }, [attempt])
  function retry() {
    setState({ status: 'loading', courses: [] })
    setAttempt(value => value + 1)
  }
  return { ...state, retry }
}
