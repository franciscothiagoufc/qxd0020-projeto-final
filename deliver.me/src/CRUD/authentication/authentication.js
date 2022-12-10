import {api} from '../base'

export async function authentication(email, password) {
    async function auth(){
        console.log("Authenticating "+email)
        try{
            const res = await api.post('/auth/local/',
            {
                identifier:email,
                password:password
            })
            const { data } = res
            let user = data.user
            user.token = res.data.jwt
            console.log("user id "+user.id + " authenticated")
            let message = "authenticated"
            return {user, message}
        }catch(e){
            let user = {}
            let message = e.message
            console.log('authenticated failed '+e.message)
            return {user, message}
        }
    }
    let user = {} 
    let message = ""
    await auth().then((value) => {
        user=value.user
        message=value.message
    })
    return {user,message}
}
