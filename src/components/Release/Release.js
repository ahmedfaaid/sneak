import React from 'react'
import { DateTime } from 'luxon'
import logo from '../../images/sneakersseur-logo.png'
import '../Post/Post.css'

const Release = ({ releaseData }) => {
  const {
    media,
    title,
    releaseDate,
    retailPrice,
    brand,
    colorway,
    styleId,
    gender
  } = releaseData
  const { thumbUrl } = media

  const placeholder =
    'https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0'

  return (
    <div className='lg:max-w-xs xl:max-w-sm overflow-hidden w-full md:w-2/5 lg:w-64 xl:w-2/4 md:mx-3 mb-3 shadow-md md:shadow-none px-2 md:px-0'>
      <img
        className='w-full md:w-10/12 mx-auto image-height object-cover'
        src={!thumbUrl || thumbUrl === placeholder ? logo : thumbUrl}
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
          <p className='font-body text-sm text-gray-700 capitalize'>
            Gender: {gender}
          </p>
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
