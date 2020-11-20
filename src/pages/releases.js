import React, { useState } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Spinner from '../components/Spinner/Spinner'
import Release from '../components/Release/Release'
import useReleases from '../util/useReleases'

const Releases = () => {
  const [limit, setLimit] = useState(90)

  const { releases, loading, error } = useReleases(limit)

  const moreReleases = () => {
    if (limit === 100) {
      return
    }
    setLimit(prev => prev + 10)
  }

  if (loading) {
    return (
      <Layout>
        <SEO
          title='Releases'
          description='Find out about upcoming and past sneaker releases. We bring you information about Jordans, Lebrons, Yeezys etc.'
        />
        <div className='my-3'>
          <h1 className='font-heading text-xl text-center md:text-left subpixel-antialiased font-bold tracking-wide mb-3 p-3'>
            Release Dates
          </h1>
          <p className='font-body text-xl text-gray-700 text-center mb-10'>
            Upcoming sneaker releases
          </p>
          <hr />
          <div className='flex justify-center items-center min-h-full h-full'>
            <Spinner />
          </div>
        </div>
      </Layout>
    )
  }

  if (error) {
    // window.location = '/404'
    return (
      <Layout>
        <SEO
          title='Releases'
          description='Find out about upcoming and past sneaker releases. We bring you information about Jordans, Lebrons, Yeezys etc.'
        />
        <div className='my-3'>
          <h1 className='font-heading text-xl text-center md:text-left subpixel-antialiased font-bold tracking-wide mb-3 p-3'>
            Release Dates
          </h1>
          <p className='font-body text-xl text-gray-700 text-center mb-10'>
            Upcoming sneaker releases
          </p>
          <hr />
          <p className='font-body font-bold text-xl mt-6 p-3'>
            There was an error
          </p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO
        title='Releases'
        description='Find out about upcoming and past sneaker releases. We bring you information about Jordans, Lebrons, Yeezys etc.'
      />
      <div className='my-3'>
        <h1 className='font-heading text-xl text-center md:text-left subpixel-antialiased font-bold tracking-wide mb-3 p-3'>
          Release Dates
        </h1>
        <p className='font-body text-xl text-gray-700 text-center mb-10'>
          Upcoming sneaker releases
        </p>
        <hr />
        <div className='block md:flex mb-4 justify-between flex-wrap mt-10'>
          {releases.results.map(release => (
            <Release key={release.id} releaseData={release} />
          ))}
        </div>
        <div className='text-center'>
          <button
            className={`py-2 px-8 text-white text-lg rounded-lg w-1/3 bg-secondary ${
              limit === 100
                ? 'cursor-not-allowed opacity-50'
                : 'hover:bg-primary'
            }`}
            onClick={moreReleases}
          >
            More
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Releases
