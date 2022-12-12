<template>
    <div class="container">
        <HeaderHome/>
        <div class="row">
            <LeftColumn/>
            <MainColumn/>
            <RightColumn/>
        </div>
    </div>


</template>


<script>
import HeaderHome from '@/components/SearchComponents/HeaderSearch.vue'
import LeftColumn from '@/components/SearchComponents/LeftColumn.vue'
import MainColumn from '@/components/SearchComponents/MainColumn.vue'
import RightColumn from '@/components/SearchComponents/RigthColumn.vue'

import { searchDeliver } from '@/CRUD/search/search';

export default{
    components:{
        HeaderHome,
        LeftColumn,
        MainColumn,
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
        let query = this.$route.params.query;  
        let res = await searchDeliver(query)
        let delivers=res.delivers  
        this.delivers=delivers
        console.log(delivers)
     },
}
</script>