import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {authentication} from './frontend/authentication/authentication'
import { User } from './frontend/user/user'

let user=authentication('user1@gmail.com','useruser')

console.log(user)

createApp(App).mount('#app')
