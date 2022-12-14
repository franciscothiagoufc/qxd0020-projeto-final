<script>
import AdminComponent from '@/components/admin/AdminComponent.vue';
import router from '@/router/';
export default{
    data() {
        return {
        };
    },
    async mounted(){

    },
    components: { AdminComponent }
}
</script>
<template>
    <body class="container" >
        <header class="row">
            <div class="col">
                <div class="d-flex flex-row justify-content-around mt-4">
                    <span class="p-2 font-weight-bold color-red text-primary d-none d-md-inline">
                        <router-link to="/">
                            Deliver.me
                        </router-link>
                    </span>
                    <span class="p-2 font-weight-bold color-red text-primary d-inline d-md-none">Dl.Me</span>
                </div>
            </div>
            <!--<hr>-->
        </header>
        <section class="row">
            <main class="col-12">
                <AdminComponent></AdminComponent>
            </main>
        </section>
    </body>
</template>

<style>
    a{
        text-decoration:none;
    }
</style>
