import { useEffect, useState } from 'react'
import { apiRequest } from '../services/api'

export function usePublicRecords(endpoint, fallback = [], mapRecord = (record) => record.data || record) {
  const [items, setItems] = useState(fallback)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    async function loadRecords() {
      try {
        const records = await apiRequest(endpoint)
        const mapped = Array.isArray(records) ? records.map(mapRecord).filter(Boolean) : []
        if (active && mapped.length > 0) setItems(mapped)
      } catch {
        if (active) setItems(fallback)
      } finally {
        if (active) setLoading(false)
      }
    }
    loadRecords()
    return () => { active = false }
  }, [endpoint])

  return { items, loading }
}
