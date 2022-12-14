<template>
    <div class="modal face" id="contract-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <form action="" validate id="formSend" @submit="AlertConfirmation">
                        <div class="d-flex">
                            <h1 class="createTitle p-2">Contratar Entregador</h1>
                            <button type="button" class="btx btn-close p-2" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <hr>
                        <h2 class="titleEndereços">
                            Endereço de atual do pacote
                        </h2>
                        <div class="form-floating mb-3 formulario">
                            <input type="text" class="form-control" id="Name" v-model="this.enderecoDestino" placeholder="Name" required>
                            <label for="Name">Endereço</label>
                        </div>
                        <div class="endereço">
                            <div class="form-floating mb-3 formulario">
                                <input type="text" class="form-control" v-model="this.bairroDestino" id="Name" placeholder="Name" required>
                                <label for="Name">Bairro</label>
                            </div>
                            <div class="form-floating mb-3 formulario">
                                <input type="text" class="form-control" v-model="this.numeroDestino" id="numero" placeholder="Name" required>
                                <label for="Name">Número</label>
                            </div>
                        </div>
                        <h2 class="titleEndereços">
                            Endereço de entrega do pacote
                        </h2>
                        <div class="form-floating mb-3 formulario">
                            <input type="text" class="form-control"  v-model="this.enderecoOrigem" id="Name" placeholder="Name" required>
                            <label for="Name">Endereço</label>
                        </div>
                        <div class="endereço">
                            <div class="form-floating mb-3 formulario">
                                <input type="text" class="form-control" v-model="this.bairroOrigem" id="Name" placeholder="Name" required>
                                <label for="Name">Bairro</label>
                            </div>
                            <div class="form-floating mb-3 formulario">
                                <input type="text" class="form-control" v-model="this.bairroNumero" id="numero" placeholder="Name" required>
                                <label for="Name">Número</label>
                            </div>
                        </div>
                        <div class="footer">
                            <span>Volume de carga permitda</span>
                            <span>Confirmo que o volume da entrega esta dentro do peso permitido (5kg)</span>
                        </div>
                        <div class="d-flex">
                            <div class="form-check">
                                <input type="radio" class="form-check-input" id="agree" name="radio-stacked"
                                    v-model='radioValue' value='Yes' required>
                                <label class="form-check-label" for="agree">Confirmo</label>
                            </div>
                            <div class=" decline form-check mb-3">
                                <input type="radio" class="form-check-input" id="desagree" name="radio-stacked"
                                    v-model='radioValue' value='No'>
                                <label class="form-check-label" for="desagree">Não confirmo</label>
                            </div>
                        </div>
                        <div class="btfm"><input class="btn btn-primary" type="button" id="btf" :disabled="disabled"
                                v-model="btnForm" @click="this.makeOrder()" data-bs-dismiss="modal">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {createOrder} from "@/CRUD/order/order"
import router from "@/router"
export default {
    data() {
        return {
            id:-1,
            enderecoOrigem: '',
            bairroOrigem: '',
            numeroOrigem: '',
            enderecoDestino: '',
            bairroDestino: '',
            numeroDestino: '',
            inputName: '',
            inputEmail: '',
            inputPassword: '',
            inputPasswordConfirm: '',
            mounthSelect: '',
            daySelect: '',
            yearSelect: '',
            radioValue: '',
            btnForm: 'Contratar',
            disabled: true
        }
    },
    props:["deliverid"],
    created(){
        this.id = this.deliverid
        console.log(this.deliverid)
    },
    methods:{
        freebtn:function(){
            if(this.radioValue=='No'){
                this.disabled=true
            }else{
                this.disabled=false
            }
        },
        AlertConfirmation:function(){
            window.alert('Contratação realizada, aguarde a confirmação do entregador !!')
        },
        makeOrder: async function() {
            let destiny = {
                address:this.enderecoDestino,
                district:this.bairroDestino,
                number:this.numeroDestino
            }
            let origin = {
                address:this.enderecoOrigem,
                district:this.bairroOrigem,
                number:this.numeroOrigem
            }
            console.log(this.id)
            let res =  await createOrder(this.$store.state.user,this.id,destiny,origin)
            if(res.message == "created")
            {   
                window.alert('Pedido realizado')
            }
            else
                window.alert('Falha na contratação')
        }
    },
    watch: {
        radioValue(){
            this.freebtn()
        }
    }
}

</script>

<style scoped>
.modal {
    --bs-modal-margin: 1.25rem;
}

.modal-content {
    width: 500px;
    position: fixed;
}

.modal-body {
    padding: 25px;
    padding-top: 5px;
    padding-bottom: 15px;
}

.createTitle {
    width: 500px;
}

hr {
    margin: 10px 0;
}

.pw {
    margin-bottom: 5px;
}

.top {
    padding-right: 20px;
    align-self: center;
    width: 350px;
    margin-bottom: 20px;
    padding-top: 2px;
}

h2 {
    font-size: 20px;
}

.datN {
    font-size: 10px;
}

.number {
    width: 130px;
}

.mounth {
    width: 200px;
}

.footer {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: start;
    column-gap: 1%;
    margin: 0;
    padding: 0%;
}

.agree {
    margin-top: 20px;
}

.btfm {
    display: flex;
    align-items: center;
    margin-top: 1px;
    margin-left: 50px;
}

#btf {
    width: 350px;
}
.decline {
    margin-left: 10px;
}

.endereço{
    display: flex;
    gap: 5%;
}
.titleEndereços{
    display: flex;
    align-items: start;
    margin: 2% 0%;
}
</style>