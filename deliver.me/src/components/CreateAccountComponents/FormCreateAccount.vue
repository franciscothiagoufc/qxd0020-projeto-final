<template>
    <div class="container-flex">
        <main class="row">
            <section class="col">
                <div class="card mt-4">
                    <div class="card-header text-center">
                        <h6 class="p-2 font-weight-bold color-red text-primary">Deliver.Me</h6>
                    </div>
                    <div class="card-body text-left">
                        <form class="col" id="user-input" @submit="goToRoute">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" placeholder="Name" required>
                                <label>Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="Email" class="form-control" placeholder="Name" required>
                                <label>Email</label>
                            </div>

                            <PassaAndConfirm />
                            <h6 class="text-secondary mt-4">Data de nascimento</h6>
                            <div class="input-group">
                                <input type="date" class="date">
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
                                <RouterLink to="/">
                                <input type="submit" class="btn btn-primary w-50 mt-4" value="Create account"
                                    :disabled="this.$store.state.btnCheckValue">
                                </RouterLink>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    </div>

</template>
<script>
import RadioCheck from './RadioCheck.vue';
import PassaAndConfirm from './PassaAndConfirm.vue';
export default {
    components: {
        RadioCheck,
        PassaAndConfirm
    },
    methods: {
        goToRoute() {

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
</style>
