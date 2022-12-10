import { User } from "../authentication/authentication"
import {api} from '../base'
import { Pix, Deliver, Card } from "./deliver"

export async function createCardDebit(user:User,deliver:Deliver,company:String,number:String)
{
    console.log(`Usário ${user.id} criando um cartão (debito) para o entregador ${deliver.id}`)
    async function auth():Promise<any> 
    {
        try
        {
            /*Criando novo usuário*/
            const res = await api.post(`/card-debits/`,
            {    
                data:
                {
                    company:company,
                    number:number,
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
            let card = res.data.data
            console.log(`Card ${card.id} criado`)
            return {card,message}
        }
        catch(e: any)
        {
            let card:Card = {} as Card
            let message = e.message
            console.log('Creating failed '+e.message)
            return {card, message}
        }
    }
    let res: any
    await auth().then((value) => {
        res = value
    })
    return res
}

export async function createCardCredit(user:User,deliver:Deliver,company:String,number:String)
{
    console.log(`Usário ${user.id} criando um cartão (debito) para o entregador ${deliver.id}`)
    async function auth():Promise<any> 
    {
        try
        {
            /*Criando novo usuário*/
            const res = await api.post(`/card-credits/`,
            {    
                data:
                {
                    company:company,
                    number:number,
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
            let card = res.data.data
            console.log(res)
            console.log(`Card ${card.id} criado`)
            return {card,message}
        }
        catch(e: any)
        {
            let pix:Card = {} as Card
            let message = e.message
            console.log('Creating failed '+e.message)
            return {pix, message}
        }
    }
    let res: any
    await auth().then((value) => {
        res = value
    })
    return res
}

export async function updateCardDebit(user:User,card:Card)
{
    async function auth():Promise<any> 
    {
        try
        {
            /*Criando novo usuário*/
            const res = await api.put(`/card-debits/${card.id}`,
            {    
                data:
                {
                    company:card.company,
                    number:card.number,
                },
            },
            {
                headers:
                {
                    Authorization:`Bearer ${user.token}`,
                },
            })
            let message = "Created"
            card = res.data.data
            console.log(`Card ${card.id} criado`)
            return {card,message}
        }
        catch(e: any)
        {
            let card:Card = {} as Card
            let message = e.message
            console.log('Creating failed '+e.message)
            return {card, message}
        }
    }
    let res: any
    await auth().then((value) => {
        res = value
    })
    return res
}

export async function updateCardCredit(user:User,card:Card)
{
    async function auth():Promise<any> 
    {
        try
        {
            /*Criando novo usuário*/
            const res = await api.put(`/card-credits/${card.id}`,
            {    
                data:
                {
                    company:card.company,
                    number:card.number,
                },
            },
            {
                headers:
                {
                    Authorization:`Bearer ${user.token}`,
                },
            })
            let message = "Created"
            card = res.data.data
            console.log(`Card ${card.id} criado`)
            return {card,message}
        }
        catch(e: any)
        {
            let card:Card = {} as Card
            let message = e.message
            console.log('Creating failed '+e.message)
            return {card, message}
        }
    }
    let res: any
    await auth().then((value) => {
        res = value
    })
    return res
}