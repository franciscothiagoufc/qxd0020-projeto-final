<template>
    <div class="container">
        <HeaderHome/>
        <div class="row">
            <LeftColumn/>
            <DeliverOrders/>
            <RightColumn/>
        </div>
    </div>


</template>


<script>
import HeaderHome from '@/components/SearchComponents/HeaderSearch.vue'
import LeftColumn from '@/components/SearchComponents/LeftColumn.vue'
import DeliverOrders from '@/components/Deliver/DeliverOrders.vue'

import RightColumn from '@/components/SearchComponents/RigthColumn.vue'


export default{
    components:{
        HeaderHome,
        LeftColumn,
        DeliverOrders,
        RightColumn
    },
    data(){
        return {
            delivers:{}
        }
    },
    props:{

    },
    async mounted() {

     },
}
</script>