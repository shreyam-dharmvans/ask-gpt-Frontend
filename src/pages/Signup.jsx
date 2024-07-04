import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { isLoginActions } from '../store/isLoginSlice';
import { SignupUser } from '../helpers/backendUser';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const Signup = () => {

    let dispatch = useDispatch();
    let navigate = useNavigate();

    let nameInput = useRef("");
    let emailInput = useRef("");
    let passwordInput = useRef("");

    let handleSubmit = async (event) => {
        event.preventDefault();

        let name = nameInput.current.value;
        let email = emailInput.current.value;
        let password = passwordInput.current.value;

        nameInput.current.value = "";
        emailInput.current.value = "";
        passwordInput.current.value = "";

        toast.loading("Signing In", { id: "signup" });
        let str = await SignupUser(name, email, password);
        if (str == "success") {
            dispatch(isLoginActions.login());
            toast.success("Signed In", { id: "signup" });
            navigate("/");
        } else {

            toast.error(str, { id: "signup" });
        }

    }


    return (
        <div className='login-container footer-spacing'>
            <img className="login-img drop-shadow hidden md:block" src="airobot.png" alt="" />
            <div className='form-container signup-height'>
                <div className='login-heading'><b>Signup</b></div>
                <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="name" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:border-white-600 peer" placeholder=" " required ref={nameInput} />
                        <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:border-white-600 peer" placeholder=" " required ref={emailInput} />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:border-white-600 peer" placeholder=" " required ref={passwordInput} />
                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <button type="submit" className="buttonLogin text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Submit</button>
                </form>

            </div>
        </div>
    )
}
