import React from 'react'
import addToMailChimp from 'gatsby-plugin-mailchimp'

const SubscribeForm = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        addToMailChimp(email)
            .then(data => {
                console.log('Success')
            })
            .catch(err => console.log(err))
    }

    const handleEmailChange = e => {
        setEmail(event.currentTarget.value)
    }

    return (
        <form onSubmit={handleSubmit} className='text-center mb-3'>
            <h2 className='font-heading text-xl text-left text-secondary subpixel-antialiased font-bold tracking-wide mb-3'>
                Subscribe to our email list!
            </h2>
            <div>
                <input
                    placeholder='Email address'
                    name='email'
                    type='text'
                    onChange={handleEmailChange}
                    className='block w-full p-2 rounded-lg bg-white focus:outline-none focus:shadow-outline border border-gray-300'
                />
                <button
                    type='submit'
                    className='bg-primary hover:bg-secondary text-white font-semibold py-2 px-4 border border-primary hover:border-transparent rounded mt-4'
                >
                    Subscribe
                </button>
            </div>
        </form>
    )
}

export default SubscribeForm
