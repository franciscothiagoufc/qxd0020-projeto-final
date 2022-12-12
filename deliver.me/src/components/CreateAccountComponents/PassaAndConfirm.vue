<template>
    <div class="form-floating mb-3">
        <input type="password" class="pass form-control" id="password" placeholder="password" v-model="this.$store.state.user.pass"
            minlength="6" required ref="inputPass">
        <label for="password">Password</label>
    </div>
    <div class="form-floating mb-3">
        <input type="password" class="form-control" id="passConfirm" placeholder="Confirm Password" v-model="inputPasswordConfirm" required ref="inputConfirmPass">
        <label for="confirmP">Confirm password</label>
    </div>
</template>
<script>
export default{
    data(){
        return{
            inputPasswordConfirm:''
        }
    },
    methods:{
        validatorLengthPass() {
            if (this.$refs.inputConfirmPass.value != this.$refs.inputPass.value) {
                this.$refs.inputConfirmPass.setCustomValidity("The password must be equals")
            } else {
                this.$refs.inputConfirmPass.setCustomValidity("")
            }
        },
    },
    watch:{
        inputPasswordConfirm(){
            this.validatorLengthPass()
        },
    }
}

</script>