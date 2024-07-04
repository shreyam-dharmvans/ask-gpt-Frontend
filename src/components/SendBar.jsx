import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { chatActions } from '../store/chatSlice';
import toast from 'react-hot-toast';
import { handleNewChat } from '../helpers/backendChat';

export const SendBar = () => {

    let newTxt = useRef("");
    let dispatch = useDispatch();

    let handleSend = async (event) => {
        event.preventDefault();
        try {
            toast.loading("Sending msg", { id: "newChat" });
            let res = await handleNewChat(newTxt.current.value);
            newTxt.current.value = "";

            if (res.status == 200) {
                let allChats = res.data.chats;
                dispatch(chatActions.allChats(allChats));
                toast.success("Successful response", { id: "newChat" });
            }
        }
        catch (err) {
            toast.error(err.message, { id: "newChat" });
        }
    }

    return (

        <form className='sendBar' onSubmit={(e) => handleSend(e)}>
            <label for="chat" className="sr-only">Your message</label>
            <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 sendBar-div">
                <textarea id="chat" rows="1" className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sendbar" placeholder="Your message..." ref={newTxt}></textarea>
                <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600" >
                    <svg className="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                    </svg>
                    <span className="sr-only">Send message</span>
                </button>
            </div>
        </form>

    )
}
