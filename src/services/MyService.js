import AxiosServise from "./AxiosServise";

const axios = new AxiosServise();

export default class MyService {    
    getData = () => {
        return axios.getMethod(`https://reqres.in/api/users?page=1`);
    }
}