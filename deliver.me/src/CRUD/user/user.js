import {api} from '../base'

export async function signup(user,password){
    console.log("Creating new user "+user.email)
    async function auth(){
        try{
            const res = await api.post('/users/',
            {
                email:user.email,
                username:user.name,
                password:password,
                confirmed:true
            })
            const { data } = res
            console.log("user id "+data.id + " authenticated")

            user.id = data.id
            user.token = data.jwt
            console.log(res)
            let message = "Created"
            return {user, message}
        }catch(e){
            let message = e.message
            console.log('Creating failed '+e.message)
            return {user, message}
        }
    }
    let message = ""
    await auth().then((value) => {
        user=value.user
        message=value.message
    })
    return {user,message}
}

export async function updateUser(user){
    async function auth(){
        try{
            await api.put(`/users/${user.id}`,
            {
                username:user.name,
                email:user.email
            },{
                headers:{
                    Authorization:`Bearer ${user.token}`
                }
            })
            let message = "Edited"
            return {message}
        }catch(e){
            let message = e.message
            console.log('Creating failed '+e.message)
            return {message}
        }
    }
    let message = ""
    await auth().then((value) => {
        message=value.message
    })
    return {message}
}

export async function deleteUser(user){
    console.log("Deleting user "+user.id)
    async function auth(){
        try{
            await api.delete(`/users/${user.id}/`,
            {
                headers:{
                    Authorization:`Bearer ${user.token}`
                }
            })
            let message = "Deleted"
            return {user, message}
        }catch(e){
            let message = e.message
            console.log('Deletion failed '+e.message)
            return {user, message}
        }
    }
    let message = ""
    await auth().then((value) => {
        user=value.user
        message=value.message
    })
    return {user,message}
}

export async function getUserRole(user){
    async function auth(){
        try{
            let res = await api.get(`/users/${user.id}?populate=*`,
            {
                headers:{
                    Authorization:`Bearer ${user.token}`
                }
            })
            let role = res.data.role.name
            let message = "Found"
            return {role, message}
        }catch(e){
            let message = e.message
            console.log('Creating failed '+e.message)
            return {user, message}
        }
    }
    let message = ""
    let role
    await auth().then((value) => {
        role=value.role
        message=value.message
    })
    return {role,message}
}

export async function getAllUsers(user){
    async function auth(){
        try{
            let res = await api.get(`/users/?populate=*`,)
            let users = res.data
            let message = "Found"
            return {users, message}
        }catch(e){
            let message = e.message
            console.log('Creating failed '+e.message)
            return {user, message}
        }
    }
    let message = ""
    let users
    await auth().then((value) => {
        users=value.users
        message=value.message
    })
    return {users,message}
}
