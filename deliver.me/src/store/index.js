import { createStore } from 'vuex'
import { authentication } from '../CRUD/authentication/authentication'
import { signup,getUserRole } from '../CRUD/user/user'
import { getUserDeliver } from '@/CRUD/deliver/deliver';
import router from '@/router';

export default createStore({
  state: {
    selected_deliver:-1,
    user:{
      name:'',
      email:'',
      pass:'',
      token:'',
      role:''
    },
    deliver:{
      id:-1,
      description:"",
      local:"",
      rating:0
    },
    btnCheckValue:true
  },
  getters: {
    
  },
  mutations: {
    async updateUser(state,input)
    {
      let res = await authentication(input.email,input.pass)
      if(res.message == "authenticated")
      {
        state.user.id = res.user.id,
        state.user.name = res.user.username
        state.user.token = res.user.token
        res = await getUserRole(state.user)
        state.user.role = res.role
        res = await getUserDeliver(state.user)
        console.log(state.user.role)

        if(res.message == "found")
        {
            state.deliver.id = res.deliver.id
            state.deliver.description = res.deliver.description
            state.deliver.rating = res.deliver.rating
            state.deliver.local = res.deliver.local
            router.push('/deliver/');
        }
        else if(state.user.role == "Admin")
          router.push('/admin/');
        else
          router.push('/myorders');
      }
    },
    async signup(state,name,email)
    {
      let user = {
        name : name,
        email : email
      }
      let res = await signup(user,this.$store.user.pass)
      if(res.message == "Created")
      {
        state.user.id = res.user.id,
        state.user.role = "Authenticated",
        state.user.name = res.user.username,
        state.user.email = res.user.email, 
        state.user.token = res.user.token
        console.log(state.user.role)
        await router.push('/myorders')
      }
    },
    logout(state){
      state.user.id = ""
      state.user.name = ""
      state.user.email = "" 
      state.user.token = ""
      state.user.token = ""
      state.deliver.id = -1
      state.deliver.description = ""
      state.deliver.rating = 0
    },
    changeBtn(state,valorBtn){
      if(valorBtn=='No'){
        state.btnCheckValue=true
      }else{
        state.btnCheckValue=false
      }
      
    },
    createUser(state){
      console("Create user")
      signup(state.user.name,state.user.email,state.user.pass)
    }
  },
  actions: {
  },
  modules: {
  }
})
