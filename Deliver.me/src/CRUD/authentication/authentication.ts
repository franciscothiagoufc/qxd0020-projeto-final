import {api} from '../base'

export interface User{
    id:string;
    name:string;   
    email:string;
    token:string; 
}
export async function authentication(email:string, password:string) {
    async function auth():Promise<any> {
        console.log("Authenticating "+email)
        try{
            const res = await api.get('/auth/local/',
            {
                identifier:email,
                password:password,
            })
            const { data } = res
            let user:User = data.user
            user.token = res.data.jwt
            console.log("user id "+user.id + " authenticated")
            let message = "authenticated"
            return {user, message}
        }catch(e: any){
            let user:User = {} as User
            let message = e.message
            console.log('authenticated failed '+e.message)
            return {user, message}
        }
    }
    let user:User = {} as User
    let message = ""
    await auth().then((value) => {
        user=value.user
        message=value.message
    })
    return {user,message}
}
