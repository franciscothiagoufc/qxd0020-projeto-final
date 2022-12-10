import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { authentication,User } from './CRUD/authentication/authentication'
import * as Users from './CRUD/user/user'
import { searchDeliver } from './CRUD/search/search'

import * as Delivers from './CRUD/deliver/deliver'
import * as Pixs from "./CRUD/deliver/pix"
import * as Cards from "./CRUD/deliver/card"
import * as Comment from "./CRUD/comment/comment"



let res = await authentication("fcothiago@gmail.com","123456")

let user = res.user

//let res2 = await createDeliver(user,"A runble deliver")

let res2 = await Delivers.getUserDeliver(user)

let deliver = res2.deliver

console.log(deliver)

user.name = "Francisco Thiago dos Santos Gonçalves"

let res4 = await Comment.createComent(user,deliver,"Comentário")




createApp(App).mount('#app')
    