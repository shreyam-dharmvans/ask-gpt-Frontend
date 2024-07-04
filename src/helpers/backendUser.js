import axios from 'axios';
import toast from "react-hot-toast";


export const loginUser = async (email, password) => {
    try {
        let res = await axios.post("/user/login", { email, password });

        if (res.status == 200) {
            return "success";
        }

    } catch (err) {

        if (err.response.data.cause) {
            return err.response.data.cause;
        }
        else if (err.response.data.errors[0].msg) {
            return err.response.data.errors[0].msg;
        }

        return "error";
    }

};


export const SignupUser = async (name, email, password) => {
    try {
        let res = await axios.post("/user/signup", { name, email, password });

        if (res.status == 200) {
            return "success";
        }

    } catch (err) {

        if (err.response.data.cause) {
            return err.response.data.cause;
        }
        else if (err.response.data.errors[0].msg) {
            return err.response.data.errors[0].msg;
        }

        return "error";
    }

};

export const logoutUser = async () => {
    try {
        let res = await axios.get("/user/logout");
        if (res.status == 200) {
            return "success";
        }
    }
    catch (err) {
        console.log(err);
        return err.response.data.cause;
    }
}

// export const verifyUser = async () => {
//     axios.get("/user/verify")
//         .then((res) => {
//             if (res.status == 200) {
//                 return res;
//             }
//         })
//         .catch((err) => {
//             return err;
//         });
// }
