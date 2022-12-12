<script>
import { deleteDeliver, getUserDeliver, updateDeliver } from '@/CRUD/deliver/deliver';
import { getAllUsers, updateUser } from '@/CRUD/user/user';
import { deleteUser } from '@/CRUD/user/user';
export default{
    data(){
        return{
            users:{},
            user_deliver:[],
            delivers_id:[]
        }
    },
    async mounted(){
        let res = await getAllUsers()
        this.users = res.users
        //console.log(this.users)
    },
    methods:{
        deleteUser:async function (id){
            let user = {
                id:id,
                token:this.$store.state.user.token
            }
            let res = await getUserDeliver(user)
            if(res.message == "found")
            {
                await deleteDeliver(res.deliver)
            }
            res = await deleteUser(user)
            if(res.message == "Deleted")
            {
                console.log("Deletado")
                let res = await getAllUsers()
                this.users = res.users
            }
        },
        update:async function(deliver,rating,description,user,name,email){
            console.log(deliver,rating,description)
            await updateDeliver(deliver,rating,description,this.$store.state.user.token)
            await updateUser(user,name,email,this.$store.state.user.token)
        }
    }
}
</script>
<template>
    <div class="card mt-4" >
        <div class="card-body text-left">
            <div >
                <div >
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Avaliação</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody v-for="user in users"  v-bind:key="user.id">
                            <tr>
                                <td>{{user.id}}</td>
                                <td><input type="text" v-model="user.username"></td>
                                <td><input type="text" v-model="user.email"></td>
                                <td v-if="user.deliver"><input v-model="user.deliver.rating" type="number"/></td>
                                <td v-else>*</td>
                                <td>
                                    <button class="btn btn-danger" @click="this.deleteUser(user.id)">
                                        Deletar
                                    </button>
                                    <button class="btn btn-success" @click="this.update(user.deliver.id,user.deliver.rating,user.deliver.description,user.id,user.username,user.email)">
                                        Atualizar
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>