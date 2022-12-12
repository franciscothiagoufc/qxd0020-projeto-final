import {api} from '../base'

export async function createOrder(userid,deliverid,token){
    async function auth(){
        try{
            await api.post('/orders/',
            {
                data:{
                    user:userid,
                    deliver:deliverid
                }
            },{
                headers:{
                    Authorization:`Bearer ${token}`,
                } 
            })
            let message = "Created"
            return {message}
        }catch(e){
            let message = e.message
            return {message}
        }
    }
    let message = ""
    await auth().then((value) => {
        message=value.message
    })
    return {message}
}

export async function getOrders(deliverId,token){
    async function auth(){
        try{
            console.log(deliverId)
            const res = await api.get(`/orders/?filters[deliver][id][$eq]=${deliverId}&populate=*`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            let orders = res.data
            let message = "found"
            return {orders, message}
        }catch(e){
            let orders = {}
            let message = e.message
            console.log('Creating failed '+e.message)
            return {orders, message}
        }
    }
    let message = ""
    let orders = {}
    await auth().then((value) => {
        orders=value.orders
        message=value.message
    })
    return {orders,message}
}
