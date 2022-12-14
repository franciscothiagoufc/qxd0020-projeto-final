<template>
    <div class="container-flex">
        <main class="row">
            <section class="col">
                <div class="card mt-4">
                    <div class="card-header text-center">
                        <h6 class="p-2 font-weight-bold color-red text-primary">Deliver.Me</h6>
                    </div>
                    <div class="card-body text-left">
                        <form class="col" id="user_input" action="" @submit.prevent="createUser">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" placeholder="Name" v-model="name" required>
                                <label>Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="Email" class="form-control" placeholder="Name" v-model="email" required>
                                <label>Email</label>
                            </div>
                            <PassaAndConfirm />
                            <h6 class="text-secondary mt-4">Data de nascimento</h6>
                            <div class="input-group">
                                <input type="date" class="date">
                            </div>
                            <div class="tipo">
                                Como deseja utilizar nossa plataforma ?
                                <select class="form-select" id="tipo" v-model='tipo' ref="tipoSelect" required>
                                    <option selected disabled></option>
                                    <option value="cliente">Preciso de um entregador</option>
                                    <option value="entregador">Quero trabalhar com vocês</option>
                                </select>
                            </div>
                            <div class="mt-4">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label mr" for="flexCheckDefault">
                                    Deseja receber Notificações de Deliver.Me no seu E-Mail?
                                </label>
                            </div>
                            <!--<h6 class="text-secondary mt-4">Termos de uso</h6>-->
                            <p class="mt-4">
                                Aceita nossos <a href=".">Termos de Uso</a>?
                            </p>
                            <div class="checkContainer">
                                <RadioCheck />
                            </div>
                            <div class="d-flex flex-row justify-content-center">
                                <!----<RouterLink to="/">-->
                                <input type="submit" class="btn btn-primary w-50 mt-4" value="Create account"
                                    :disabled="this.$store.state.btnCheckValue">
                                <!----</RouterLink>-->
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>
<script>
import router from '@/router';
import { signup } from '@/CRUD/user/user';
import RadioCheck from './RadioCheck.vue';
import PassaAndConfirm from './PassaAndConfirm.vue';
import { authentication } from '@/CRUD/authentication/authentication';

export default {
    data(){
        return {
            name:"",
            email:"",
            tipo:"cliente"
        }
    },
    components: {
        RadioCheck,
        PassaAndConfirm
    },
    methods:{
        async createUser() {
            let user = {
                name : this.name,
                email : this.email
            }
            console.log(this.$store.state.user.pass)
            let res = await signup(user,this.$store.state.user.pass)
            if(res.message == "Created")
            {
                let res = await authentication(user.email,this.$store.state.user.pass)
                this.$store.state.user.name = res.user.username
                this.$store.state.user.email = res.user.email
                this.$store.state.user.token = res.user.token
                this.$store.state.user.id = res.user.id
                if(this.tipo == "entregador" )
                    router.replace({ path: '/afiliate' })
                else if(this.tipo == "cliente" )
                    router.replace({ path: '/' })
            }
        }
    }
}

</script>

<style scoped>
.container-flex {
    margin: 0% 10%;
    width: 100%;
}

.card-body {
    display: flex;
    text-align: start;
}

.date {
    border: 1px solid;
    border-radius: 5px;
    opacity: 75%;
}

.date:focus {
    outline: none;
    border: 1px solid;
    border-radius: 5px;
}

.checkContainer {
    display: flex;
    gap: 2%;
}

.btn {
    width: 100%
}

.tipo,#tipo{
    width: 50%;
    margin: 2% 0%;
}
</style>
