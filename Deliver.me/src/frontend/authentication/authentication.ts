import {api} from '../base'

export interface User{
    id:string;
    name:string;   
    email:string;
    token:string; 
}
export async function authentication(email:string, password:string) {
    async function auth():Promise<any> {
        try{
            const res = await api.post('/auth/local/',
            {
                identifier:email,
                password:password,
            })
            const { data } = res
            let user:User = 
            {
                id : data.user.id,
                email : email,
                token: data.jwt,
                name: data.user.username
            }
            console.log("user id "+user.id + " authenticated")
            let message = "authenticated"
            return {user, message}
        }catch(e: any){
            let user:User = 
            {
                id : "",
                email : email,
                token: "",
                name: ""
            }
            let message = e.message
            console.log('authenticated failed '+e.message)
            return {user, message}
        }
    }
    let user:User = 
    {
                id: "",
                email:"",
                token:"",
                name:""
    }
    let message = ""
    await auth().then((value) => {
        user=value.user
        message=value.message
    })
    
    return {user,message}
}