import React from 'react'
import Instagram from '../Instagram/Instagram'
// import SubscribeForm from '../SubscribeForm/SubscribeForm'
import AdComponent from '../AdComponent/AdComponent'

const Sidebar = () => (
    <aside className='sm:max-w-md md:min-h-screen md:top-0 my-6 bg-gray-200'>
        <div className='p-2'>
            <AdComponent />
            {/* add subscribe form when ready for newsletter subscriptions */}
            {/* <SubscribeForm /> */}
            <hr />
            <Instagram />
        </div>
    </aside>
)

export default Sidebar
