<script>
import { createDeliver } from '@/CRUD/deliver/deliver';
import router from '@/router';
    export default{
        data(){
            return{
                description : ""
            }
        },
        methods:{
            createDeliver:async function(){
                console.log(this.$store.state.user)

                let res = await createDeliver(this.$store.state.user,this.description)
                if(res.message == "Created")
                {
                    router.push("/")
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
                        <form class="col" id="user_input" action="">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" placeholder="Descrição" v-model="this.description" required>
                                <label>Descrição</label>
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