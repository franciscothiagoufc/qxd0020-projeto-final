import {api} from '../base'
//https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html#filtering
export async function searchDeliver(query) {
    async function search(){
        try{

            const res = await api.get(`/delivers/?filters[$or][0][user][username][$contains]=${query}&filters[$or][1][local][$contains]=${query}&populate=*`,{
                params:{
                    /*fields:["id","rating","description","local","orders"]*/
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