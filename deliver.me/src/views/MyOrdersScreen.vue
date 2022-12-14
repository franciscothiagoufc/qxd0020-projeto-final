<template>
    <div class="container">
        <HeaderHome/>
        <div class="row">
            <LeftColumn/>
            <MainColumnOrders/>
            <RightColumn/>
        </div>
    </div>


</template>


<script>
import HeaderHome from '@/components/SearchComponents/HeaderSearch.vue'
import LeftColumn from '@/components/SearchComponents/LeftColumn.vue'
import MainColumnOrders from '@/components/MyordersComonents/MainColumnOrders.vue'
import RightColumn from '@/components/SearchComponents/RigthColumn.vue'

export default{
    components:{
        HeaderHome,
        LeftColumn,
        MainColumnOrders,
        RightColumn
    }
}
</script>