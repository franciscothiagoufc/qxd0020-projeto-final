import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { authentication,User } from './frontend/authentication/authentication'
import { signup } from './frontend/user/user'

let user:User={
    name:"User3",
    email:"user3@gmail.com",
    token:"",
    id:""
}
let auth= await signup(user,'useruser')
console.log(auth)

createApp(App).mount('#app')
