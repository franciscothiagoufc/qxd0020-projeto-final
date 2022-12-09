import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { authentication,User } from './frontend/authentication/authentication'
import { deleteUser, signup } from './frontend/user/user'
import { searchDeliver } from './frontend/search/search'
import { createDeliver, getDeliver } from './frontend/deliver/deliver'


let {delivers,message} = await searchDeliver("Francisco")
const params = new URLSearchParams(window.location.pathname);
params.set("query","Francisco")


createApp(App).mount('#app')
