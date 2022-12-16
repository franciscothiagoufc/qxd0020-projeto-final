<script>
import { createDeliver, updateDeliver, updateRole } from '@/CRUD/deliver/deliver';
import router from '@/router';
    export default{
        data(){
            return{
                description : "",
                local : "",
            }
        },
        methods:{
            createDeliver:async function(){

                let deliver = {
                    description:this.description,
                    local:this.local
                }
                let res = await createDeliver(this.$store.state.user,deliver)
                if(res.message == "Created")
                {
                    await updateRole(this.$store.state.user)
                    this.$store.state.deliver.id = res.deliver.id,
                    this.$store.state.user.role ="Deliver",
                    this.$store.state.deliver.description = res.deliver.description,
                    this.$store.state.deliver.rating = res.deliver.rating

                    router.push("/deliver")
                }
            }, 
            jump: function(){
                router.push('/')
            }   
        }
    }
</script>
<template>
    <div class="container-flex">
        <main class="row">
            <section class="col">
                <div class="card mt-4">
                    <div class="card-header text-center">
                        <h6 class="p-2 font-weight-bold color-red text-primary">Deliver.Me</h6>
                    </div>
                    <div class="card-body text-left">
                        <form class="" id="user_input" action="">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" placeholder="Descrição" v-model="this.description" required>
                                <label>Descrição</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" placeholder="Descrição" v-model="this.local" required>
                                <label>Locais de Atuação</label>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer text-left d-flex flex-row justify-content-around">
                            <button @click="this.createDeliver()" class="btn-primary w-25">Afiliar</button>
                            <button class="btn-secondary w-25" @click="this.jump()"> Pular</button>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>