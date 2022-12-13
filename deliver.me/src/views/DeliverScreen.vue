<template>
    
    <div class="container">
        <div class="row">
            <LeftColumn/>
            <main class="col-12 col-lg-8">
                <DeliverData/>
                <DeliverOrders/>
            </main>
            <RightColumn/>
        </div>
    </div>


</template>


<script>
import LeftColumn from '@/components/SearchComponents/LeftColumn.vue'
import DeliverOrders from '@/components/Deliver/DeliverOrders.vue'
import DeliverData from '@/components/Deliver/DeliverData.vue'

import RightColumn from '@/components/SearchComponents/RigthColumn.vue'
import { updateDeliver } from '@/CRUD/deliver/deliver'


export default{
    components:{
        LeftColumn,
        DeliverOrders,
        DeliverData,
        RightColumn
    },
    data(){
        return {
            description:""
        }
    },
    props:{

    },
    async mounted() {

     },
     methods:{
        update:async function(){
            console.log(this.$store.state.deliver)
            updateDeliver(this.$store.state.deliver.id,this.$store.state.deliver.rating,this.$store.state.deliver.description,this.$store.state.user.token)
        }
     }
}
</script>