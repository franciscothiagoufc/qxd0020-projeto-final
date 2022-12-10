import { User } from "../authentication/authentication"
import {api} from '../base'
export interface Pix{
    id:Number
    key:String
}
export interface Card{
    id:Number
    company:string
    number:string
}
export interface Deliver{
    id:Number,
    rating:Number,
    pix_tel:Pix,
    pix_rand:Pix,
    pix_email:Pix,
    credit:Card,
    debit:Card,
    available:Boolean,
    description:String
}

export async function createDeliver(user:User,description:String) {
    console.log(`User ${user.id} is creating a new deliver`)
    async function auth():Promise<any> {
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
            let deliver = res.data.data
            let message = "Created"
            console.log(`Entregador ${deliver.id} criado`)
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
            const res = await api.get(`/delivers/${id}?populate=*`)
            /*Todo -- Atualizar relação*/
            let deliver = res.data.data.attributes
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


export async function getUserDeliver(user:User) {
    console.log(`Buscando entregador atribuido ao usuário ${user.id}`)
    async function auth():Promise<any> {
        try{
            let message = "found"
            const res = await api.get(`/delivers/?filters[user][id][$eq]=${user.id}&populate=*`)
            /*Todo -- Atualizar relação*/
            let deliver:Deliver = 
            {
                id:res.data.data[0].id,
                rating:res.data.data[0].attributes.rating,
                pix_tel:res.data.data[0].attributes.pix_tel.data,
                pix_rand:res.data.data[0].pix_rand,
                pix_email:res.data.data[0].attributes.pix_email.data,
                credit:{} as Card,
                available:res.data.data[0].attributes.available,
                debit:res.data.data[0].attributes.pix_debit,
                description:res.data.data[0].attributes.description
            }
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

export async function updateDeliver(user:User,deliver:Deliver) {
    console.log(`User ${user.id} is updating a deliver`)
    async function auth():Promise<any> {
        try{
            /*Criando novo usuário*/
            const res = await api.put(`/delivers/${deliver.id}`,
            {    
                data:
                {
                    rating:deliver.rating,
                    description: deliver.description,
                    avaliable: deliver.available,
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
            let message = "Created"
            console.log(`Entregador ${deliver.id} editado`)
            return {deliver,message}
        }catch(e: any){
            let deliver:Deliver = {} as Deliver
            let message = e.message
            console.log('editing failed '+e.message)
            return {deliver, message}
        }
    }
    let res: any
    await auth().then((value) => {
        res = value
    })
    return res
}

export async function deleteDeliver(user:User,deliver:Deliver){
    console.log(`User ${user.id} deletando entregador`)
    async function auth():Promise<any> {
        try{
            const res = await api.delete(`/delivers/${deliver.id}`,
            {   
                headers:{
                    Authorization:`Bearer ${user.token}`
                }
            })
            console.log("deletado")
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


