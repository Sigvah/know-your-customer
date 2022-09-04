
import axios from 'axios';

export const GetPep = (name) => {
    return axios
    .get(`https://code-challenge.stacc.dev/api/pep?name=${name}`)
    .then(data => (data.data))
    .catch(error => console.log(error));
};