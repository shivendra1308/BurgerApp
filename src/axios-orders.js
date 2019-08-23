import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-c83a1.firebaseio.com/'
});

export default instance;