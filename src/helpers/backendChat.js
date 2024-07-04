import axios from "axios";


// export const loadAllChats = async (obj) => {
//     try {
//         let res = await axios.get("/chat/allChats", obj);

//         return res;
//     }
//     catch (err) {

//         return err;
//     }
// }


export const handleNewChat = async (newTxt) => {
    try {

        let res = await axios.post("/chat/new", { newChat: newTxt });

        return res;
    }
    catch (err) {
        return err;
    }
}

export const clearChats = async () => {
    try {
        let res = await axios.delete("/chat/delete");
        if (res.status == 200) {
            return "success";
        }
    }
    catch (err) {
        return err.message;
    }
}

