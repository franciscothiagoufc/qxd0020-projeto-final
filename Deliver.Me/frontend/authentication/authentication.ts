import {User} from '../user/user'
import {api} from '../base'
async function authentication(login:string, password:string):Promise<User|string> {
    try{
        const res = await api.post('/auth/local',
        {
            identifier:login,
            password:password
        })
        const { data } = res
        let user:User = 
        {
            id : res.data.id,
            name: res.data.name,
            email: login,
            token:data.jwt
        };
        return user
    }catch(error){
        return error.response
    }
}