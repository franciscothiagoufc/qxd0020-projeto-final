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