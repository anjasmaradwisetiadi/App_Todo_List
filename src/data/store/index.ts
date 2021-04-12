import { createStore } from 'vuex'
import {modalReusable } from './modal'
import { crudTodoList } from './crudTodoList'

export default createStore({
  state: {
    bookRepo: ['tips memasak olahan jawa', 'mencari uang cepat'],
  },
  mutations: {
    addBook(state,payload){
      state.bookRepo.push(payload)
    }
  },
  actions: {
  },
  getters:{
    getBookRepo:(state)=>{
      return state.bookRepo
    }
  },
  modules: {
    modalReusable,
    crudTodoList
  }
})
