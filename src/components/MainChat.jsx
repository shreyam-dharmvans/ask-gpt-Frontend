import React, { useEffect } from 'react'
import { OneChat } from './OneChat';
import { SendBar } from './SendBar';
import { useDispatch, useSelector } from 'react-redux';
import { chatActions } from '../store/chatSlice';
//import { loadAllChats } from '../helpers/backendChat';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { ClearConvSmall } from "./ClearConvSmall"
import ScrollableFeed from 'react-scrollable-feed'

export const MainChat = () => {

    let dispatch = useDispatch();
    let initialChats = useSelector(store => store.chats);


    useEffect(() => {


        const loadAllChats = async () => {

            try {
                toast.loading("Loading chats", { id: "allChats" });
                let res = await axios.get("/chat/allChats");
                if (res.status == 200) {
                    let allChats = res.data.chats;
                    dispatch(chatActions.allChats(allChats));
                    toast.success("Chats loaded", { id: "allChats" });
                }

            }
            catch (err) {
                console.log(err);
                toast.error(err.message, { id: "allChats" });
            }
        };

        if (initialChats.length == 0) {
            loadAllChats();
        }


    }, []);

    let chats = useSelector((store) => store.chats);


    return (

        <div className='mainChat'>
            <div className='mainChat-heading'>Model-GPT 3.5 TURBO</div>
            <div className='mainChat-chats'>
                <ScrollableFeed>
                    {chats.map((chat) => {
                        return <OneChat key={chat._id} chat={chat} ></OneChat>
                    })}
                </ScrollableFeed>
            </div>

            <SendBar></SendBar>
            <ClearConvSmall></ClearConvSmall>
        </div>

    )
}



// [{
//     role: "user",
//     parts: [{ text: "Hello, I have 2 dogs in my house." }],
// },
// {
//     role: "model",
//     parts: [{ text: "Great to meet you. What would you like to know?" }],
// }, {
