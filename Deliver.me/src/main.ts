import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { authentication,User } from './frontend/authentication/authentication'
import { deleteUser, signup } from './frontend/user/user'
import { searchDeliver } from './frontend/search/search'
import { createDeliver, getDeliver } from './frontend/deliver/deliver'

let res = await authentication("fcothiago@gmail.com","123456")

let user = res.user

let res2 = await createDeliver(user,"A runble deliver")

let deliver = res2.deliver


createApp(App).mount('#app')
