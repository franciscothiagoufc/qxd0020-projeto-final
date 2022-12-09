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
        try{
            const res = await api.post(`/delivers/`,
            {
                headers:
                {
                    Authorization:`Bearer ${user.token}`
                },
                data:
                {
                    data:
                    {
                        user:user.id,
                        rating:0,
                        description:description,
                        avaliable:false
                    }
                }
            })
            const { data } = res
            let message = "Created"
            return {data, message}
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

