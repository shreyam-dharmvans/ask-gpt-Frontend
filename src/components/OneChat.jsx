import React from 'react'
import { UserChat } from './UserChat';
import { ModelChat } from './ModelChat';

// {
//     role: "user",
//     parts: [{ text: "Hello, I have 2 dogs in my house." }],
// },

export const OneChat = ({ chat }) => {

    let role = chat.role;
    return (
        <>
            {role == "user" ? <UserChat chat={chat}></UserChat> : <ModelChat chat={chat}></ModelChat>}
        </>
    )
}
