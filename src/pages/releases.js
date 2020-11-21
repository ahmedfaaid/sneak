import React, { useState } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Spinner from '../components/Spinner/Spinner'
import Release from '../components/Release/Release'
import useReleases from '../util/useReleases'
import Right from '../images/svg/chevron_right-24px.svg'
import Left from '../images/svg/chevron_left-24px.svg'

const Releases = () => {
  const [page, setPage] = useState(1)

  const { releases, loading, error } = useReleases(page)

  const nextPage = () => {
    if (page === 5) {
      return
    }
    setPage(prev => prev + 1)
  }

  const prevPage = () => {
    if (page === 1) {
      return
    }
    setPage(prev => prev - 1)
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
        <div className='flex justify-center items-center'>
          <button
            className={`p-2 border border-primary rounded-lg mr-4 ${
              page === 1
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-primary hover:text-white'
            }`}
            onClick={prevPage}
          >
            <Left className='fill-current' />
          </button>
          <span className='text-lg font-secondary'>{page}</span>
          <button
            className={`p-2 border border-primary rounded-lg ml-4 ${
              page === 5
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-primary hover:text-white'
            }`}
            onClick={nextPage}
          >
            <Right className='fill-current' />
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Releases
