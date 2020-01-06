import axios from "axios";

export const isRegistered = (username) => {
    return axios
        .get('http://localhost:5000/api/is_registered', {
            params: {username: username}
        })
        .then(res => { 
            let length = res.data.data.length;

            console.log(String(length))
            let userData = new Array(length);
            for (let i = 0; i < length; i++) {
                userData[i] = new Array(1);
                userData[i][0] = res.data.data[i]["username"];
            }
            return length;
            }
        ).catch((error) => {
            console.log(error);
        });
};
