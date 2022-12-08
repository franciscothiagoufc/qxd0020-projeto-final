import {api} from '../base'
import { User } from "../authentication/authentication"
import { Deliver, Pix,Card } from '../deliver/deliver'
//https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html#filtering
export async function searchDeliver(query:String) {
    async function search():Promise<any> {
        try{
            const res = await api.get(`/delivers/?filters[user][username][$contains]=${query}`,{
                params:{
                    fields:["id","rating","description"]
                }
            })
            const { data } = res
            let delivers:Deliver[]=[];
            data.data.forEach(element => {
                let deliver:Deliver = {
                    id:element.id,
                    user:{} as User,
                    rating:element.rating,
                    telpix:{} as Pix,
                    randompix:{} as Pix,
                    emailpix:{} as Pix,
                    credit:{} as Card,
                    debit:{} as Card,
                    description:element.description
                }
                delivers.push(deliver)
            });
            let message = "found"
            return {delivers, message}
        }catch(e: any){
            let delivers:Deliver[]=[];
            let message = e.message
            console.log('search failed '+e.message)
            return {delivers, message}
        }
    }
    let res:any
    await search().then((value) => {
        res=value
    })
    return res
}