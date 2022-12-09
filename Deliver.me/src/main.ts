import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { authentication,User } from './frontend/authentication/authentication'
import { deleteUser, signup } from './frontend/user/user'
import { searchDeliver } from './frontend/search/search'
import { createDeliver } from './frontend/deliver/deliver'


let {user,message1} = await authentication("fcothiago@gmail.com","123456")
console.log(user)
let {deliver,message2} = await createDeliver(user,"Um simples entregado")

createApp(App).mount('#app')
