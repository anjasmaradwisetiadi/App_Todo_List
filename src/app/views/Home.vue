<template>
  <div class="PageTodoList ">
    <div class="modal_View">
      <!-- add Todo list-->
      <ModalAddEditTodo></ModalAddEditTodo>
    </div>

    <div class="z-0 page_Todo_List p-16 pt-24">
      <!-- card -->
     <AddTodoList></AddTodoList>
     <Card></Card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src
import AddTodoList from '../components/reusable/add_todo_list/Index.vue';
import Card from '../components/reusable/card/Index.vue';
import ModalAddEditTodo from '../components/modal/add_edit_todo/Index.vue';
import { mapGetters, mapMutations } from 'vuex';
// import "reflect-metadata";
// import {container} from "tsyringe";
// import {serviceModal} from "../../data/service/service";


// const instance =container.resolve(serviceModal)

export default defineComponent({
  name: 'Home',
  components: {
    AddTodoList,
    Card,
    ModalAddEditTodo
  },

  computed:{
    ...mapGetters(['getTodoList'])
  },

    created() {
      window.addEventListener('resize', this.handleRisize())
    },

    unmounted() {
      window.addEventListener('resize', this.handleRisize())
    },

    methods:{
    ...mapMutations(['setHandleRisize']),
      
      handleRisize():any{
        this.setHandleRisize({
          width : window.innerWidth,
          height : window.innerHeight
        })
      },

    // dataModel(){
    //   let data=instance.stateModel
    //   return data
    // }
  }

})
</script>
