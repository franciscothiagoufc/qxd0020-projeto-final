import {User} from '../user/user'
import {api} from '../base'
export async function authentication(login:string, password:string):Promise<User|string> {
    try{
        const res = await api.post('/auth/local/',
        {
            identifier:login,
            password:password,
        })
        const { data } = res
        let user:User = 
        {
            id : data.user.id,
            name: data.user.username,
            email: data.user.login,
            token: data.jwt
        };
        return user
    }catch(e: any){
        return e.message
    }
}