import axios from "axios";

export default class AxiosServise {
   getMethod = (url, isHeaderRequired = false) => {
        return axios.get(url, isHeaderRequired)
    }
}
