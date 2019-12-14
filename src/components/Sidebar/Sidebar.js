import React from 'react';

const Sidebar = () => (
    <aside className='md:h-screen md:sticky md:top-0 my-6 bg-gray-200'>
       <form>
            <h2>Subscribe to my email list!</h2>
            <div>
                <input
                placeholder="Email address"
                name="email"
                type="text"
                />
                <button type="submit">Subscribe</button>
            </div>
        </form>
    </aside>
);

export default Sidebar;