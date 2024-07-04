import React from 'react'
import { useDispatch } from 'react-redux'
import { chatActions } from '../store/chatSlice';
import { toast } from "react-hot-toast";
import { clearChats } from '../helpers/backendChat';

export const SideChat = () => {

    let dispatch = useDispatch();

    const handleClearConv = async () => {
        toast.loading("Clearing chats", { id: "clearChat" });
        let res = await clearChats();
        if (res == "success") {
            dispatch(chatActions.clearChat());
            toast.success("Chats cleared", { id: "clearChat" });
        }
        else {
            toast.error(res, { id: "clearChat" });
        }
    }

    return (
        <div className='sideChat max-[960px]:hidden'>
            <div className='sideChat-user'>
                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">SD</span>
                </div>
            </div>
            <div className='sideChat-intro'>You are talking to a ChatBOT</div>
            <div className='sideChat-content'>You can ask some questions related to knowledge, Buisness, Advices, Education, etc. But avoid sharing personal information</div>
            <div className='sideChat-btn'>
                <button type="button" className="sideChatClear focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={handleClearConv}>Clear Conversation</button>
            </div>
        </div>
    )
}
