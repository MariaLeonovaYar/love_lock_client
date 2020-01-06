import axios from "axios";

export const sendInputValue = (name, surname, username, password) => {
    const payload = {
        name: name,
        surname: surname,
        username: username,
        password: password
    };
    return axios
        .post('http://localhost:5000/api/send', payload)
        .then(res => {
            console.log('Данные успешно были отправлены');
            return res.data;
        })
        .catch((error) => {
            console.log('Данные не были успешно отправлены');
            console.log(error);
        });
};
