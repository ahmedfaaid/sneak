import { useState, useEffect } from 'react'
import { DateTime } from 'luxon'

const useReleases = page => {
  const [releases, setReleases] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const now = DateTime.local().toISODate()

  useEffect(() => {
    async function fetchReleases(url) {
      setLoading(true)
      try {
        const data = await fetch(
          `${process.env.GATSBY_SNEAKER_DB_API}/v1/sneakers?limit=10&releaseDate=gte:${now}&sort=releaseDate:asc&page=${page}`
        )
        const releaseData = await data.json()

        setReleases(releaseData)
      } catch (error) {
        console.log('There was an error fetching the release data')
        setError(error)
      }

      setLoading(false)
    }

    fetchReleases()
  }, [page, now])

  return {
    releases,
    loading,
    error
  }
}

export default useReleases
