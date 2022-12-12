<template>
    <nav class="d-none d-lg-block col-md-2">
                <ul>
                    <li><a href=".">Home</a></li>
                    <li><a href=".">Profile</a></li>
                    <li><a href=".">Settings</a></li>
                    <li><a href=".">Filtrar</a></li>
                </ul>
            </nav>
</template>


<style scoped>
ul{
    margin-top: 10%;
    list-style: none;
    display: flex;
    flex-direction: column;
    padding-right: 20%;
    height: 80%;
    gap:20px;
    width: 80%;
    
}
li{
    width: 100%;
    border-radius: 10px;
    display: flex;
    text-align: start;
    padding-left: 20%;
    align-items: center;
    height: 5vh;
}
li:hover{

    background: rgb(215, 215, 215);
}
a{
    width: 100%;
    text-decoration: none;
}
</style>