<script>
import { searchDeliver } from '@/CRUD/search/search';
import { createOrder } from '@/CRUD/order/order';
export default{
    data(){
        return {
            delivers:{}
        }
    },
    props:{

    },
    async mounted() {
        let query = this.$route.params.query;  
        let res = await searchDeliver(query)
        let delivers=res.delivers  
        this.delivers=delivers
        console.log(delivers)
     },
    methods:{
        order: async function (deliverid){
            console.log(deliverid)

            if(this.$store.state.user.role == "Authenticated")
            {
                let res = await createOrder(this.$store.state.user.id,deliverid,this.$store.state.user.token)
                console.log(res)
            }
        }
    }
}
</script>
<template>
    <main class="col-12 col-lg-8">
        <div class="card mt-4" v-for="deliv in delivers"  v-bind:key="deliv.id">
            <div class="card-body text-left">
                <div class="d-flex flex-row justify-content-around">
                    <img src="@/assets/motoboy-smartphone.png" alt="user-picture">
                    <div class="w-75">
                        <p><a href="deliver.html">{{deliv.attributes.user.data.attributes.username}}</a></p>
                        <div style="overflow-y: none;min-height:120px;max-height:120px;" class="text">
                            {{deliv.attributes.description}}
                        </div>
                        <div class=" bottom d-flex flex-row justify-content-around mt-2">
                            <div>
                                <span>Avaliação:</span>
                                <span>{{deliv.attributes.rating}}</span>
                            </div>
                            <!--<div>
                                <span>Status:</span>
                                <span>Disponível</span>
                            </div>-->
                            <div>
                                <button class="btn btn-primary" @click="this.order(deliv.id)">
                                    Contratar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
img{
    height: 10%;
    width: 10%;
    border-radius: 15px;
}
.text{
    text-align: start;
}
.bottom{
    padding-top:5%;
}
</style>
