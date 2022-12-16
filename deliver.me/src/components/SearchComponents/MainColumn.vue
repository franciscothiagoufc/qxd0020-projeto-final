<script>
import { searchDeliver } from '@/CRUD/search/search';
import { createOrder } from '@/CRUD/order/order';
import ModalContractVue from './ModalContract.vue';
export default{
    data(){
        return {
            delivers:{},
            ratings:[]
        }
    },
    async mounted(){
        let query = this.$route.params.query;  
        let res = await searchDeliver(query)
        let delivers=res.delivers  
        this.delivers=delivers
        this.delivers.forEach(deliver => {
            let sum = 0 
            this.ratings[deliver.id] = 5 
            console.log(deliver.attributes.orders.data)
            deliver.attributes.orders.data.forEach(element =>{
                sum += element.attributes.rating
            })
            this.ratings[deliver.id] = deliver.attributes.orders.data.length > 0 ? sum/(deliver.attributes.orders.data.length) : 5;
        });

    },
    methods:{
        selectDeliver:function(id){
            this.$store.state.selectDeliver = id
        }
    },
    components:{
        ModalContractVue
    }

}
</script>

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

<template>
    <main class="col-12 col-lg-8">
        <div class="card mt-4" v-for="deliver in this.delivers" :key="deliver.id" >
            <div class="card-body text-left">
                <div class="d-flex flex-row justify-content-around">
                    <img src="@/assets/motoboy-smartphone.png" alt="user-picture">
                    <div class="w-75">
                        <p><a href="deliver.html">{{deliver.attributes.user.data.attributes.username}}</a></p>
                        <div style="overflow-y: none;min-height:120px;max-height:120px;" class="text">
                            {{deliver.attributes.description}}
                        </div>
                        <div>
                            <p>Locais:{{deliver.attributes.local}}</p>
                        </div>
                        <div class=" bottom d-flex flex-row justify-content-around mt-2">
                            <div>
                                <span>Avaliação: </span>
                                <span>{{this.ratings[deliver.id]}}</span>
                            </div>
                            <div>
                                <!--<span>Status:</span>
                                <span>{{deliver.attributes.status}}</span>-->
                            </div>
                            <div v-if="this.$store.state.user.role != '' " >
                                <button class="btn btn-primary" data-bs-toggle="modal" @click="this.selectDeliver(deliver.id)" data-bs-target="#contract-modal">
                                    Contratar
                                </button>
                                <ModalContractVue :deliverid="deliver.id"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>


