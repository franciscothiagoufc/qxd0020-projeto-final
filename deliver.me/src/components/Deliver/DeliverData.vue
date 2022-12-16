<script>
import { updateDeliver } from '@/CRUD/deliver/deliver';
import router from '@/router';
export default{
    data(){
        return{
            local:"local",
            description:'description'
        }
    },
    methods:{
        updateDeliver: async function(){
            let user = 
            {
                token:this.$store.state.user.token
            }
            let deliver = 
            {
                id:this.$store.state.deliver.id,
                local:this.$store.state.deliver.local,
                description:this.$store.state.deliver.description
            }
            let res = await updateDeliver(user,deliver)
            console.log(res)
            if(res.message == "Edited")
                window.alert("Dados atualizados")
            else
                window.alert("Falha ao alterar dados")
            /*console.log(this.$store.state.user)
            console.log(this.$store.state.deliver)*/

        }
    }
}
</script>
<template>
    <h4>Informações</h4>
    <form class="mt-4" id="user_input" @submit="this.confimEdition()">
        <div class="form-floating mb-3 d-flex align-items-stretch">
            <input type="text" class="form-control" placeholder="Descrição" v-model="this.$store.state.deliver.description" required>
            <label>Descrição</label>
        </div>
        <div class="form-floating mb-3 d-flex align-items-stretch">
            <input type="text" class="form-control" placeholder="Descrição" v-model="this.$store.state.deliver.local" required>
            <label>Locais</label>
        </div>
        <RouterLink to="/deliver">
            <button @click="this.updateDeliver()" class="btn-success w-75" >Atualizar</button>
        </RouterLink>
    </form>
</template>