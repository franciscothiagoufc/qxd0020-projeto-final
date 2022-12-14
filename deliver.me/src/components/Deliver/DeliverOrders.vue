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
    async mounted(){

        let res = await getOrders(this.$store.state.deliver.id,this.$store.state.user.token)
        this.orders = res.orders.data
        console.log(res.orders)
    },
    methods:{
        order: async function (deliverid){
            console.log(deliverid)

            if(this.$store.state.user.role == "Authenticated")
            {
                let res = await createOrder(this.$store.state.user.id,deliverid,this.$store.state.user.token)
            }
        }
    }
}
</script>

<template>
        <h4>Pedidos</h4>
        <table class="table w-100">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Origem</th>
                    <th>Destino</th>
                    <th>Avaliação</th>
                </tr>
            </thead>
            <tbody v-for="order in this.orders"  v-bind:key="order.id">
                <tr>
                    <td>{{order.attributes.user.data.attributes.username}}</td>
                    <td>{{order.attributes.origin.address}} {{order.attributes.origin.district}} {{order.attributes.origin.number}}</td>
                    <td>{{order.attributes.destiny.address}} {{order.attributes.destiny.district}} {{order.attributes.destiny.number}}</td>
                    <td v-if="order.attributes.finished">{{order.attributes.rating}}</td>
                    <td v-else>Pendente</td>
                </tr>
            </tbody>
        </table>
</template>