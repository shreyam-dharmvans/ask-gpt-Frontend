import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderLogo = () => {
    return (
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="openai.png" className="h-8 header-logo" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-medium whitespace-nowrap dark:text-white askHead">ASK<span className='GPT'>- GPT</span></span>
        </Link>
    )
}
