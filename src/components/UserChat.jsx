import React from 'react'

export const UserChat = ({ chat }) => {
    return (
        <div className='oneChat'>
            <div className=" avatar-chat relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">{chat.role[0].toUpperCase()}</span>
            </div>
            <div className='chat-text my-auto'>{chat.parts[0].text}</div>
        </div>
    )
}
