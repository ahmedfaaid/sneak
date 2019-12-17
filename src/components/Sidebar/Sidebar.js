import React from 'react'
import Instagram from '../Instagram/Instagram'
import SubscribeForm from '../SubscribeForm/SubscribeForm'

const Sidebar = () => (
    <aside className='md:h-screen md:sticky md:top-0 my-6 bg-gray-200'>
        <div className='p-2'>
            <SubscribeForm />
            <hr />
            <Instagram />
        </div>
    </aside>
)

export default Sidebar
