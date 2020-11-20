import React from 'react'
import { DateTime } from 'luxon'

const Release = ({ releaseData }) => {
  const {
    media,
    title,
    releaseDate,
    retailPrice,
    brand,
    colorway,
    styleId
  } = releaseData
  const { thumbUrl } = media

  return (
    <div className='lg:max-w-xs xl:max-w-sm overflow-hidden w-full md:w-2/5 lg:w-64 xl:w-2/4 md:mx-3 mb-3 shadow-md md:shadow-none'>
      <img
        className='w-full md:w-10/12 mx-auto image-height'
        src={thumbUrl}
        alt={title}
      />
      <div className='md:px-6 py-4'>
        <h2 className='font-heading text-xl font-bold subpixel-antialiased'>
          {DateTime.fromISO(releaseDate).toFormat('LLL dd')}
        </h2>
        <h1 className='font-heading text-lg subpixel-antialiased mb-2'>
          {title.substring(0, 30)}
        </h1>
        <p className='font-body text-md font-bold'>${retailPrice}</p>
        <div className='mt-4'>
          <p className='font-body text-sm text-gray-700'>Brand: {brand}</p>
          <p className='font-body text-sm text-gray-700'>
            Colorway: {colorway}
          </p>
          <p className='font-body text-sm text-gray-700'>Style ID: {styleId}</p>
        </div>
      </div>
    </div>
  )
}

export default Release
