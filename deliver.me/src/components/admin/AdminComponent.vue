<script>
import { getAllUsers } from '@/CRUD/user/user';
import { deleteUser } from '@/CRUD/user/user';
export default{
    data(){
        return{
            users:{}
        }
    },
    async mounted(){
        let res = await getAllUsers()
        this.users = res.users
    },
    methods:{
        deleteUser:async function (id){
            let user = {
                id:id,
                token:this.$store.state.user.token
            }
            let res = await deleteUser(user)
            if(res.message == "Deleted")
            {
                console.log("Deletado")
                let res = await getAllUsers()
                this.users = res.users
            }
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
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody v-for="user in users"  v-bind:key="user.id">
                            <tr>
                                <td>{{user.id}}</td>
                                <td>{{user.username}}</td>
                                <td>{{user.email}}</td>
                                <td>
                                    <button class="btn btn-danger" @click="this.deleteUser(user.id)">
                                        Deletar
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