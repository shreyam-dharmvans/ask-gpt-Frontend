import React from 'react'
import { SideChat } from '../components/SideChat.jsx'
import { MainChat } from '../components/MainChat'



export const Chat = () => {

    return (

        <div className='chat'>
            <SideChat></SideChat>
            <MainChat></MainChat>
        </div>
    )

}
