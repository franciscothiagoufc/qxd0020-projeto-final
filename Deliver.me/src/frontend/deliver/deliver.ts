import { User } from "../authentication/authentication"
import {api} from '../base'
export interface Pix{
    key:String
}
export interface Card{
    enterprise:string
    number:string
}
export interface Deliver{
    id:Number,
    rating:Number,
    telpix:Pix,
    randompix:Pix,
    emailpix:Pix,
    credit:Card,
    debit:Card,
    description:String
}

export async function createDeliver(user:User,description:String) {
    console.log(`User ${user.id} is creating a new deliver`)
    async function auth():Promise<any> {
        let deliver:Deliver = {} as Deliver
        let message = "Created"
        try{
            /*Criando novo usuário*/
            const res = await api.post(`/delivers/`,
            {    
                data:
                {
                    rating:0,
                    description: description,
                    avaliable: false,
                    user:user.id
                },
            },
            {
                headers:
                {
                    Authorization:`Bearer ${user.token}`,
                },
            })
            deliver = res.data.data
            console.log(deliver.id)
            /*Todo -- Remover esse CRUD*/
            /*await api.put(`/users/${user.id}`,
            {    
                deliver:deliver.id
            },
            {
                headers:
                {
                    Authorization:`Bearer ${user.token}`,
                },
            })*/
            return {deliver,message}
        }catch(e: any){
            let deliver:Deliver = {} as Deliver
            let message = e.message
            console.log('Creating failed '+e.message)
            return {deliver, message}
        }
    }
    let res: any
    await auth().then((value) => {
        res = value
    })
    return res
}

export async function getDeliver(id:Number) {
    console.log(`Buscando entregador ${id}`)
    async function auth():Promise<any> {
        try{
            let message = "found"
            const res = await api.get(`/delivers/${id}`)
            /*Todo -- Atualizar relação*/
            let deliver = res.data.data
            return {deliver,message}
        }catch(e: any){
            let deliver:Deliver = {} as Deliver
            let message = e.message
            console.log('Acessing failed '+e.message)
            return {deliver, message}
        }
    }
    let res: any
    await auth().then((value) => {
        res = value
    })
    return res
}


