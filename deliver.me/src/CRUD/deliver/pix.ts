import { User } from "../authentication/authentication"
import {api} from '../base'
import { Pix, Deliver } from "./deliver"

export async function createPixTel(user:User,deliver:Deliver,key:String)
{
    console.log(`Usário ${user.id} criando uma chave pix (telefone) para o entregador ${deliver.id}`)
    async function auth():Promise<any> 
    {
        try
        {
            /*Criando novo usuário*/
            const res = await api.post(`/pix-tels/`,
            {    
                data:
                {
                    tel:key,
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
            let pix = res.data
            console.log(`Pix ${pix.id} criado`)
            return {pix,message}
        }
        catch(e: any)
        {
            let pix:Pix = {} as Pix
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

export async function createPixEmail(user:User,deliver:Deliver,key:String) 
{
    console.log(`Usário ${user.id} criando uma chave pix (email) para o entregador ${deliver.id}`)
    async function auth():Promise<any> {
        try{
            /*Criando novo usuário*/
            const res = await api.post(`/pix-emails/`,
            {    
                data:
                {
                    email:key,
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
            let pix = res.data
            console.log(`Pix ${pix.id} criado`)
            return {pix,message}
        }catch(e: any){
            let pix:Pix = {} as Pix
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

export async function createPixRandom(user:User,deliver:Deliver,key:String) 
{
    console.log(`Usário ${user.id} criando uma chave pix (aleatoria) para o entregador ${deliver.id}`)
    async function auth():Promise<any> {
        try{
            /*Criando novo usuário*/
            const res = await api.post(`/pix-randoms/`,
            {    
                data:
                {
                    random:key,
                    deliver:deliver.id,
                },
            },
            {
                headers:
                {
                    Authorization:`Bearer ${user.token}`,
                },
            })
            let message = "Created"
            let pix = res.data.data
            console.log(`Pix ${pix.id} criado`)
            return {pix,message}
        }catch(e: any){
            let pix:Pix = {} as Pix
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

export async function updatePixTel(user:User,pix:Pix,key:String)
{
    console.log(`Usário ${user.id} editando uma chave pix (telefone) para o entregador ${pix.id}`)
    async function auth():Promise<any> 
    {
        try
        {
            /*Criando novo usuário*/
            const res = await api.put(`/pix-tels/${pix.id}`,
            {    
                data:
                {
                    tel:key,
                }
            },
            {
                headers:
                {
                    Authorization:`Bearer ${user.token}`,
                },
            })
            let message = "Edited"
            pix = res.data
            console.log(`Pix ${pix.id} editado`)
            return {pix,message}
        }
        catch(e: any)
        {
            let pix:Pix = {} as Pix
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

export async function updatePixEmail(user:User,pix:Pix,key:String) 
{
    console.log(`Usário ${user.id} criando uma chave pix (email) para o entregador ${pix.id}`)
    async function auth():Promise<any> {
        try{
            /*Criando novo usuário*/
            const res = await api.put(`/pix-emails/${pix.id}`,
            {    
                data:
                {
                    email:key,
                },
            },
            {
                headers:
                {
                    Authorization:`Bearer ${user.token}`,
                },
            })
            let message = "Edited"
            pix = res.data
            console.log(`Pix ${pix.id} editado`)
            return {pix,message}
        }catch(e: any){
            let pix:Pix = {} as Pix
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

export async function updatePixRandom(user:User,pix:Pix,key:String) 
{
    console.log(`Usário ${user.id} editando uma chave pix (aleatoria) ${pix.id}`)
    async function auth():Promise<any> {
        try{
            /*Criando novo usuário*/
            const res = await api.put(`/pix-randoms/${pix.id}`,
            {    
                data:
                {
                    random:key,
                },
            },
            {
                headers:
                {
                    Authorization:`Bearer ${user.token}`,
                },
            })
            let message = "Edited"
            pix = res.data.data
            console.log(`Pix ${pix.id} editado`)
            return {pix,message}
        }catch(e: any){
            let pix:Pix = {} as Pix
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