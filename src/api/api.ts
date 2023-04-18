import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        'API-KEY': '7c5f3953-7fae-4325-9a4f-8956ec3d0d04'
    }
})


export const usersAPI = {

    getUsers(page: number, pageSize: number) {
        return (
            instance.get(`users?page=${page}&count=${pageSize}`)
                .then(response => response.data)
        )
    }
}

export const followAPI = {

    unFollow(userID:number){
        return (
            instance.post(`follow/${userID}`,{})
                .then(response => response.data)
        )
    },


    follow(userID:number){
        return (
            instance.delete(`follow/${userID}`)
                .then(response => response.data)
        )
    }
}