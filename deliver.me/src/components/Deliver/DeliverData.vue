<script>
import { updateDeliver } from '@/CRUD/deliver/deliver';

export default{
    methods:{
        update: async function(){
            await updateDeliver(this.$store.state.user,this.$store.state.deliver)
        }
    }
}
</script>
<template>
    <h4>Informações</h4>
    <form class="mt-4" id="user_input">
        <div class="form-floating mb-3 d-flex align-items-stretch">
            <input type="text" class="form-control" placeholder="Descrição" v-model="this.$store.state.deliver.description" required>
            <label>Descrição</label>
        </div>
        <div class="form-floating mb-3 d-flex align-items-stretch">
            <input type="text" class="form-control" placeholder="Descrição" v-model="this.$store.state.deliver.local" required>
            <label>Locais</label>
        </div>
        <button @click="this.update()" class="btn-success w-75">Atualizar</button>
    </form>
</template>