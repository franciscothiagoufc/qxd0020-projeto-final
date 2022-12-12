<script>
import { getOrders } from '@/CRUD/order/order';
import { createOrder } from '@/CRUD/order/order';
import router from '@/router';
export default{
    data(){
        return {
            orders:{}
        }
    },
    props:{

    },
    async mounted() {
        if(this.$store.state.deliver.id <0){
            router.push("/")
        }
        let res = await getOrders(this.$store.state.deliver.id,this.$store.state.user.token)
        this.orders = res.orders.data
        console.log(this.orders[0].id)
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
        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>nome</th>
                </tr>
            </thead>
            <tbody v-for="order in this.orders"  v-bind:key="order.id">
                <tr>
                    <td>{{order.id}}</td>
                    <td>{{order.attributes.user.data.attributes.email}}</td>
                    <td>{{order.attributes.user.data.attributes.username}}</td>
                </tr>
            </tbody>
        </table>
    </main>
</template>