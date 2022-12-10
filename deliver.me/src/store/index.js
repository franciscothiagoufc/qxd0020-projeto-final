import { createStore } from 'vuex'
import { authentication } from '../CRUD/authentication/authentication'

export default createStore({
  state: {
      user:'ExempleUser',
      btnCheckValue:true
  },
  getters: {
    
  },
  mutations: {
    async updateUser(state,input){
      console.log(input.pass)
      let res = await authentication(input.email,input.pass)
      if(res.message == "authenticated")
        state.user = res.user.username
    },
    changeBtn(state,valorBtn){
      if(valorBtn=='No'){
        state.btnCheckValue=true
      }else{
        state.btnCheckValue=false
      }
      
    }
  },
  actions: {
  },
  modules: {
  }
})
