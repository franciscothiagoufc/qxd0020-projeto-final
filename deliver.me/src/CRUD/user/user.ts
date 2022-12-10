import {authentication, User} from '../authentication/authentication'
import {api} from '../base'

export async function signup(user:User,password:string){
    console.log("Creating new user "+user.email)
    async function auth():Promise<any> {
        try{
            const res = await api.post('/users/',
            {
                email:user.email,
                username:user.name,
                password:password,
                confirmed:true
            })
            const { data } = res
            console.log("user id "+data.user.id + " authenticated")
            user.id = data.user.id
            user.token = data.user.jwt
            let message = "Created"
            return {user, message}
            return {user, message}
        }catch(e: any){
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

export async function updateUser(user:User){
    console.log(`Atualizando usuário ${user.id}`)
    async function auth():Promise<any> {
        try{
            const res = await api.put(`/users/${user.id}`,
            {
                username:user.name,
            },{
                headers:{
                    Authorization:`Bearer ${user.token}`
                }
            })
            const { data } = res
            console.log(`user ${user.id} editado`)
            user.id = data.user.id
            user.token = data.user.jwt
            let message = "Edited"
            return {user, message}
            return {user, message}
        }catch(e: any){
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

export async function deleteUser(user:User){
    console.log("Deleting user "+user.id)
    async function auth():Promise<any> {
        try{
            const res = await api.delete(`/users/${user.id}/`,
            {
                headers:{
                    Authorization:`Bearer ${user.token}`
                }
            }).then()
            let message = "Deleted"
            return {user, message}
        }catch(e: any){
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