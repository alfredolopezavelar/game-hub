import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '475f04bc6ba14be6a397477473b3d281'
    }
})