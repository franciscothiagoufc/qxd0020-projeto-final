import { User } from "../authentication/authentication"
import {api} from '../base'
import {Deliver} from '../deliver/deliver'

interface Coment{
    id:String;
    text:String
}
export async function createComent(user:User,deliver:Deliver,text:String)
{
    console.log(`Usário ${user.id} esta adicionando um comentário a ${deliver.id}`)
    async function auth():Promise<any> 
    {
        try
        {
            /*Criando novo usuário*/
            const res = await api.post(`/coments/`,
            {    
                data:
                {
                    text:text,
                    user:user.id,
                    deliver:deliver.id
                },
            },
            {
                headers:
                {
                    Authorization:`Bearer ${user.token}`,
                },
            })
            let message = "Created"
            let coment = res.data.data
            console.log(`Comentário ${coment.id} criado`)
            return {coment,message}
        }
        catch(e: any)
        {
            let coment:Coment = {} as Coment
            let message = e.message
            console.log('Creating failed '+e.message)
            return {coment, message}
        }
    }
    let res: any
    await auth().then((value) => {
        res = value
    })
    return res
}