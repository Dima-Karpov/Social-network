import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0//',
    headers: {
        'API-KEY': 'f62603e6-eeb0-4d40-822d-9cb8d5beb0d3',
    },
    
});

export const usersAPI = {
    getUsers(carrentPage: number, pageSize: number) {
        return instance.get(`users?page=${carrentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}

