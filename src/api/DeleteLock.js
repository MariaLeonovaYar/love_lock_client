import axios from "axios";

export const delete_lock_id= (id_lock) => {
    const payload = {
       id_lock: id_lock
    };
    return axios
        .post('http://server-lock.herokuapp/api/delete_lock_id', payload)
        .then(res => {
            console.log('Данные успешно были отправлены');
            return res.data;
        })
        .catch((error) => {
            console.log('Данные не были успешно отправлены');
            console.log(error);
        });
};