import React from 'react';

const Sidebar = () => (
    <aside className='md:h-screen md:sticky md:top-0 my-6 bg-gray-200'>
        <div className='p-2'>
            <form className='text-center'>
                <h2 className='font-heading text-xl text-left text-secondary subpixel-antialiased font-bold tracking-wide mb-3'>Subscribe to our email list!</h2>
                <div>
                    <input
                    placeholder="Email address"
                    name="email"
                    type="text"
                    className='block w-full p-2 rounded-lg bg-white focus:outline-none focus:shadow-outline border border-gray-300'
                    />
                    <button type="submit" className='bg-primary hover:bg-secondary text-white font-semibold py-2 px-4 border border-primary hover:border-transparent rounded mt-4'>Subscribe</button>
                </div>
            </form>
        </div>
    </aside>
);

export default Sidebar;