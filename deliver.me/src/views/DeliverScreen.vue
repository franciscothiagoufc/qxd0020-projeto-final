<template>
    
    <div class="container">
        <form class="mt-4 row" id="user_input">
                <div class="form-floating mb-3 d-flex align-items-stretch">
                    <input type="text" class="form-control" placeholder="Descrição" v-model="this.$store.state.deliver.description" required>
                    <label>Descrição</label>
                    <button @click="this.update()" class="btn-success">Atualizar</button>
                </div>
        </form>
        <div class="row">
            <LeftColumn/> 
            <DeliverOrders/>
            <RightColumn/>
        </div>
    </div>


</template>


<script>
import LeftColumn from '@/components/SearchComponents/LeftColumn.vue'
import DeliverOrders from '@/components/Deliver/DeliverOrders.vue'

import RightColumn from '@/components/SearchComponents/RigthColumn.vue'
import { updateDeliver } from '@/CRUD/deliver/deliver'


export default{
    components:{
        LeftColumn,
        DeliverOrders,
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