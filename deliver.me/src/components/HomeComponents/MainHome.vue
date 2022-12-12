<script>
    export default {
        data(){
            return{
                account:{
                    email:'',
                    pass:''
                },
                query:""
            }
        },
        methods:{
            login(){
                this.$store.commit("updateUser",this.account)
            },
            logout(){
                this.$store.commit("logout")
            }
        }
    }
</script>
<template>
    <main>
        <section class="row" id="logo">
            <div class="col">
                <div class="d-flex flex-row justify-content-center mt-5">
                    <span
                        class="p-2 display-1 font-weight-bold color-red text-primary d-none d-md-inline">Deliver.Me</span>
                    <span class="p-2 display-1 font-weight-bold color-red text-primary d-inline d-md-none">Dl.Me</span>
                </div>
            </div>
        </section>
        <section class="row" id="input">
            <form class="col" id="user-input">
                <div class="input-group mt-5">
                    <input type="text" class="form-control" placeholder="Entregador, Bairro, Cidade" v-model="this.query" aria-label="search"
                        aria-describedby="basic-addon1">
                </div>
                <div class="input-group d-flex flex-row justify-content-center mt-5">
                    <div class="containerButtons">
                        <button v-if="this.$store.state.user.token == ''" type="button" class="btnOutModal btn btn-secondary" data-bs-toggle="modal"
                            data-bs-target="#login-modal">Login</button>
                        <button v-else  class="btnOutModal btn btn-secondary" @click="this.logout()">Logout</button>
                        <button @click="$router.push('/search/'+this.query)" type="button"  class="btnOutModal btn btn-primary">Pesquisar</button>
                    </div>
                </div>
            </form>
        </section>
        <section class="row" id="login">
            <div class="modal fade" id="login-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="login-modal" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content ">
                        <div class="modal-header text-center ">
                            <h5 class="modal-title ">Login</h5>
                            <button type="button"  class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body d-flex">
                            <form class="col" id="user-input">
                                <h6 class="text-secondary">Email</h6>
                                <div class="input-group">
                                    <input type="e-mail" class="form-control" placeholder="Digite seu e-mail"
                                        aria-label="search" aria-describedby="basic-addon1" v-model="account.email"  required>
                                </div>
                                <h6 class="text-secondary mt-4">Senha</h6>
                                <div class="input-group">
                                    <input type="password" class="form-control" aria-label="search"
                                        placeholder="Digite sua senha" aria-describedby="basic-addon1" v-model="account.pass" minlength="3"
                                        required>
                                </div>
                                <div class="modal-footer">
                                    <div>
                                        <a href="#">Esqueci minha senha</a>
                                    </div>
                                    <div class="modalButtons">
                                        <router-link to="/createAccount" data-bs-dismiss="modal">
                                            <button type="button" class="btn btn-secondary">Signup</button>
                                        </router-link>
                                        <input type="button" class="btn btn-primary" value="Login" data-bs-dismiss="modal" @click="login"> 
                                     </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<style scoped>
.containerButtons {
    justify-content: center;
    display: flex;
    gap: 20%;
}

.btnOutModal {
    padding: 7% 20%;
}

.text-secondary {
    display: flex;
    justify-content: start;
}

.modal-footer {
    display: flex;
    justify-content: space-between;
}

.modalButtons {
    width: 35%;
    display: flex;
    justify-content: space-between;
}
hr{
    height: 0.5px;
    width: 100%;
}
</style>