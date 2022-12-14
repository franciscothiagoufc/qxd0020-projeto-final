import {api} from '../base'

export async function createOrder(user,deliverid,destiny,origin)
{
    async function auth(){
        try{
            await api.post('/orders/',
            {
                data:{
                    user:user.id,
                    deliver:deliverid,
                    destiny:destiny,
                    finished:false,
                    rating:5,
                    origin:origin
                }
            },{
                headers:{
                    Authorization:`Bearer ${user.token}`,
                } 
            })
            let message = "created"
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


export async function deleteOrder(user,id)
{
    async function auth(){
        try{
            await api.delete(`/orders/${id}`,{
                headers:{
                    Authorization:`Bearer ${user.token}`,
                } 
            })
            let message = "deleted"
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


export async function finishOrder(user,order,rating){
    async function auth(){
        try{
            const res = await api.put(`/orders/${order}`,{
                data:{
                    rating:rating,
                    finished:true
                }
            },{
                headers:{
                    Authorization:`Bearer ${user.token}`
                }
            })
            let message = "finished"
            return {message}
        }catch(e){
            let message = e.message
            console.log('Creating failed '+e.message)
            return {message}
        }
    }
    let message = ""
    await auth().then((value) => {
        message=value.message
    })
    return {message}
}

export async function getUserOrders(user){
    async function auth(){
        try{
            const res = await api.get(`/orders/?filters[user][id][$eq]=${user.id}&populate=*`,{
                headers:{
                    Authorization:`Bearer ${user.token}`
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
