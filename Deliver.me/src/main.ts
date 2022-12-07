import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { authentication } from './frontend/authentication/authentication'

let auth= await authentication('user1@gmail.com','useruser')
console.log(auth)

createApp(App).mount('#app')
