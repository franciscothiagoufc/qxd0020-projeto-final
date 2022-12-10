import {api} from '../base'
import { User } from "../authentication/authentication"
import { Deliver, Pix,Card } from '../deliver/deliver'
//https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html#filtering
export async function searchDeliver(query) {
    async function search(){
        try{
            const res = await api.get(`/delivers/?filters[user][username][$contains]=${query}`,{
                params:{
                    fields:["id","rating","description"]
                }
            })
            const { data } = res
            let delivers=[];
            data.data.forEach(element => {
                delivers.push(element)
            });
            let message = "found"
            return {delivers, message}
        }catch(e){
            let delivers=[];
            let message = e.message
            console.log('search failed '+e.message)
            return {delivers, message}
        }
    }
    let res
    await search().then((value) => {
        res=value
    })
    return res
}