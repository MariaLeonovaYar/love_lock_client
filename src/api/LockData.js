import axios from "axios";

export const sendLockData= (person, design, size, message) => {
    const payload = {
        // username: username,
        person: person,
        design: design,
        size: size,
        message: message
    };
    return axios
        .post('http://localhost:5000/api/send_lock_data', payload)
        .then(res => {
            console.log('Данные успешно были отправлены');
            return res.data;
        })
        .catch((error) => {
            console.log('Данные не были успешно отправлены');
            console.log(error);
        });
};