<template>
    <div class="form-check">
        <input type="radio" class="form-check-input" id="agree" name="radio-stacked" v-model='radioValue' value='Yes'
            required>
        <label class="form-check-label" for="agree">Sim</label>
    </div>
    <div class=" decline form-check mb-3">
        <input type="radio" class="form-check-input" id="desagree" name="radio-stacked" v-model='radioValue' value='No'>
        <label class="form-check-label" for="desagree">Não</label>
    </div>
</template>
<script>
export default{
    data(){
        return{
            radioValue:'No'
        }
    },
    methods:{
        changeBtn(){
            this.$store.commit('changeBtn',this.radioValue)
        }
    },
    watch:{
        radioValue(){
            this.changeBtn()
        }
    }   

}
</script>
<style scoped>
</style>
