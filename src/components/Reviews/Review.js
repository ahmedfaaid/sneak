import React from 'react'
import { Link } from 'gatsby'

const Review = ({ title, author, date, body }) => {
    return (
        <div class="block md:flex mb-4 justify-between flex-wrap">
            <div class="lg:max-w-xs overflow-hidden md:w-2/5 lg:w-1/3 mx-3 mb-3 shadow-md md:shadow-none">
                <div class="md:px-6 py-4">
                    <h3 class="font-heading text-lg subpixel-antialiased mb-2">
                        {title}
                    </h3>
                </div>
                <Link
                    class="text-primary hover:text-secondary hover:underline md:ml-6"
                    to="/reviews/"
                >
                    Read more <span>&rarr;</span>
                </Link>
            </div>
        </div>
    )
}

export default Review
