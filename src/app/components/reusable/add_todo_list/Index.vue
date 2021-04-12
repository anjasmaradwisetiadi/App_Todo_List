<template>
    <div class="button_addTodoList mt-6">
        <div class="flex">
            <div class="w-2/6">
                <button @click.prevent="setModal()"
                    class="flex py-4 w-full text-white bg-blue-500 rounded-3xl text-2xl justify-center focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <span class="material-icons mr-3 text-3xl -mt-1">
                        add
                    </span>
                    Add Task
                </button>
            </div>
            <div class="w-6">

            </div>
            <div class="w-4/6">
                <input placeholder="Search...."
                    class="w-full gap-4 py-4 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-3xl border border-purple-400">
            </div>
        </div>
    </div>

</template>
<script lang="ts">
import { mapMutations } from 'vuex';
import { defineComponent } from 'vue';

    // import "reflect-metadata";
    // import {container} from "tsyringe";
    // import {serviceModal} from "../../../../data/service/service";

    // const instance =container.resolve(serviceModal)

    export default defineComponent({
        data(){
            return{
                data:0
            }
        },

        methods:{
            ...mapMutations(['setToggleModal']),
            
            setModal(){
                this.setToggleModal({
                    toggleModal:true,
                    stateMode:"add",
                    id:null,
                    index:null
                })
            }
        },
    })

</script>