<template>
    <main class="col-12 col-lg-8">
        <h1>Meus Pedidos</h1>
        <div class="card mt-4" v-for="order in this.orders" v-bind:key="order.id">
            <div class="card-body text-left">
                <div class="d-flex flex-row justify-content-around">
                    <div class="w-100">
                        <h4>Dados do pedido:</h4>
                        <div style="overflow-y: none;min-height:120px;max-height:120px;" class="text">
                            <div>
                                <p><span>Entregador</span>: {{order.attributes.deliver.data.id}}</p>
                                <p><span>Endereço da busca do pacote</span>: {{order.attributes.origin.address}}, {{order.attributes.origin.address}}, {{order.attributes.origin.district}} </p>
                                <p><span>Endereço da entrega:</span> {{order.attributes.destiny.address}}, {{order.attributes.destiny.address}}, {{order.attributes.destiny.district}}</p>
                            </div>
                        </div>
                        <div class="bottom d-flex flex-row justify-content-around mt-2">
                            <div class="avaliationStatus">
                                <label for="status">Avalie o entregador:</label>
                                <select v-if="!order.attributes.finished" class="form-select" id="status" v-model='order.attributes.rating' ref="statusSelect" required >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <select v-else class="form-select" id="status" v-model='order.attributes.rating'   ref="statusSelect" required :disabled="true">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5" selected>5</option>
                                </select>
                            </div>
                            <div class="orderStatus">
                                <label for="status">Status:</label>
                                <select class="form-select" id="status" :disabled="order.attributes.finished" ref="statusSelect" required>
                                    <option value="Finalizado" v-if="order.attributes.finished">Finalizado</option>
                                    <option value="Curso" v-else>Em curso</option>
                                </select>
                            </div>
                            <button class="btn btn-danger" @click="this.removeOrder(order.id)"  :disabled="order.attributes.finished">
                                Cancelar
                            </button>
                            <button class="btn btn-primary" :disabled="order.attributes.finished" @click="this.finishOrder(order.id,order.attributes.rating)">
                                Finalizar
                            </button>
                                <!--<ModalContractVue />-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
/*import ModalContractVue from './ModalContract.vue';
export default{
    components:{
        ModalContractVue
    }
}*/
import { getUserOrders,deleteOrder,finishOrder } from '@/CRUD/order/order'
import router from '@/router'
import { routeLocationKey } from 'vue-router'
export default {
    data() {
        return {
            orders:{},
            nomeEntregador: 'Joao',
            status:'Curso',
            disable: false,
            avaliation:5,
            disableAvaliation: true,
        }
    },
    methods: {
        freebtn() {
            if (this.status == 'Finalizado') {
                this.disable = true
            } else {
                this.disable = false
            }
        },
        freeAvaliation() {
            if (this.status == 'Finalizado') {
                this.disableAvaliation = false
            } else {
                this.disableAvaliation = true
            }
        },
        removeOrder: async function(id){
            let res = await deleteOrder(this.$store.state.user,id)
            if(res.message == "deleted"){
                let res = await getUserOrders(this.$store.state.user)
                if(res.message == "found")
                    this.orders = res.orders.data
                else
                    window.alert("Falha ao recarregar a página")
            }
            else
                window.alert("Falha ao cancelar o pedido")
        },
        finishOrder:async function(id,rating){
            console.log(id)
            let res = await finishOrder(this.$store.state.user,id,rating)
            if(res.message == "finished"){
                let res = await getUserOrders(this.$store.state.user)
                if(res.message == "found")
                    this.orders = res.orders.data
                else
                    window.alert("Falha ao recarregar a página")
            }
            else
                window.alert("Falha ao cancelar o pedido")
        }
    },
    watch: {
        status() {
            this.freebtn()
            this.freeAvaliation()
        }
    },
    async mounted(){
        let res = await getUserOrders(this.$store.state.user)
        this.orders = res.orders.data
    }
}
</script>

<style scoped>
img {
    height: 10%;
    width: 10%;
    border-radius: 15px;
}

.text {
    text-align: start;
}

.bottom {
    display: flex;
    padding-top: 2%;
    align-items: center;
}

.orderStatus {
    width: 25%;
    gap: 5%;
    display: flex;
    align-items: center;
}
.avaliationStatus {
    width: 25%;
    gap: 1%;
    display: flex;
    align-items: center;
    white-space: pre;
}
h4{
    padding:2%;
}
span{
    font-weight: bolder;
}
</style>
