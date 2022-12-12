<template>
    <header class="row">
        <div class="col">
            <div class="d-flex flex-row justify-content-around mt-4">
                <RouterLink to="/" class="link p-2 font-weight-bold color-red text-primary d-none d-md-inline">Deliver.Me</RouterLink>
                <span class="p-2 font-weight-bold color-red text-primary d-inline d-md-none">Dl.Me</span>
                <div class="input-group w-75">
                    <input type="text" class="form-control" aria-label="search" aria-describedby="basic-addon1">
                    <button type="button" class="btn btn-primary">Pesquisar</button>
                </div>
                <img alt="Profile" src="">
            </div>
        </div>
        <hr>
    </header>
</template>
<style scoped>
hr{
    margin-top: 1%;
}
.link{
    text-decoration: none;
}
</style>