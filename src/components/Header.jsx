import React, { useEffect } from 'react'
import { HeaderLogo } from './HeaderLogo'
import { HeaderButton } from './HeaderButton'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isLoginActions } from '../store/isLoginSlice';
import toast from 'react-hot-toast';
import { logoutUser } from '../helpers/backendUser';
import axios from 'axios';


export const Header = () => {

    let navigate = useNavigate();
    let isLogin = useSelector((store) => store.isLogin);
    let dispatch = useDispatch();

    useEffect(() => {

        const verifyUser = async () => {
            axios.get("/user/verify")
                .then((res) => {
                    if (res.status == 200) {
                        dispatch(isLoginActions.login());
                    }
                })
                .catch((err) => {
                });
        }

        verifyUser();

    }, []);

    let handleSignupBtn = () => {
        navigate("/signup");
    };

    let handleLoginBtn = () => {
        navigate("/login");
    };

    let handleGoToChatBtn = () => {
        navigate("/chat");
    };

    let handleLogoutBtn = async () => {

        toast.loading("Logging out", { id: "logout" });
        let str = await logoutUser();

        if (str == "success") {
            toast.success("Logged out", { id: "logout" });
            dispatch(isLoginActions.logout());
            navigate("/");
        }
        else {
            toast.error(str, { id: "logout" });
        }
    };


    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 header">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-1 header">
                <HeaderLogo></HeaderLogo>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse header-buttons">
                    {!isLogin ?
                        <>
                            <HeaderButton text="Signup" color="#00fffc" textColor="#05101ce8" handleOnClick={handleSignupBtn}></HeaderButton>
                            <HeaderButton text="Login" color="#51538f" handleOnClick={handleLoginBtn}></HeaderButton>
                        </>
                        :
                        <>
                            <HeaderButton text="Go to chat" color="#00fffc" textColor="#05101ce8" handleOnClick={handleGoToChatBtn}></HeaderButton>
                            <HeaderButton text="Logout" color="#51538f" handleOnClick={handleLogoutBtn}></HeaderButton>
                        </>}
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                </div>
            </div>
        </nav>

    )
}
