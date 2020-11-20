import { useState, useEffect } from 'react'
import { DateTime } from 'luxon'

const useReleases = limit => {
  const [releases, setReleases] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const now = DateTime.local().toISODate()

  useEffect(() => {
    async function fetchReleases(url) {
      setLoading(true)
      try {
        const data = await fetch(
          `${process.env.GATSBY_SNEAKER_DB_API}/v1/sneakers?limit=${limit}&releaseDate=gte:${now}&sort=releaseDate:asc`
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
  }, [limit, now])

  return {
    releases,
    loading,
    error
  }
}

export default useReleases
