import React from 'react'
import { HomeHeading } from '../components/HomeHeading'

export const Home = () => {
    return (

        <>
            <HomeHeading></HomeHeading>
            <div className='img-container'>
                <img className="robotImg" src="robot.png" alt="robot" />
                <img className="OpenAIimg" src="openai.png" alt="openai" />
            </div>
            <img className="chatImg" src="chat.png" alt="" />

        </>
    )
}
