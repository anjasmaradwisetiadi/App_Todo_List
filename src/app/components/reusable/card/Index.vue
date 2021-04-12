<template>
    <div class="card mt-4">
        <div v-for="(item,index) in getTodoList" :key="index">
        <div class="p-6 shadow-lg bg-white rounded-xl border mt-4">
            <div class="header_card w-full flex">
                <div class="w-1/2 flex">
                    <div>
                        <div class="font-bold text-3xl">
                            {{item.title}}
                        </div>
                    </div>

                    <div class="p-2 ml-2 text-sm text-gray-400 bg-gray-100 rounded-md ">
                        {{item.priorty}}
                    </div>
                </div>
                <div class="w-1/2 flex flex-row-reverse mx-auto">
                    <div @click.prevent="setToggleModalEdit({id:item.id,index:index})">
                        <span class="material-icons text-3xl text-blue-300">
                            mode_edit
                        </span>
                    </div>
                    <div class="mr-4">
                        <span 
                            @click.prevent="deleteCard(item.id)"
                            class="material-icons text-3xl text-red-300">
                            delete
                        </span>
                    </div>
                    <div class="mr-4">
                        {{item.id}}
                    </div>
                </div>
            </div>
            <div class="text-left">
                <div class="text-base text-gray-400"> {{item.time}}</div>
            </div>

            <div class="description_card mt-3 text-left">
                {{item.description}}
            </div>
        </div>
        </div>


    </div>
</template>
<script lang="ts">
    import { mapMutations,mapGetters } from 'vuex';
    import { defineComponent } from 'vue';
    export default defineComponent({
        computed:{
            ...mapGetters(['getTodoList'])
        },

        methods:{
            ...mapMutations(['setToggleModal','deleteTodoList']),

            setToggleModalEdit(value:any){
                this.setToggleModal({
                    toggleModal:true,
                    stateMode:"edit",
                    id:value.id,
                    index:value.index
                })
            },

            deleteCard(value:string){
                this.deleteTodoList(value)
            }
        }
    })
</script>