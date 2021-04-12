<template>
    <div class="form_group flex flex-col">
        <div class="flex mt-6 w-full">
            <div class="w-1/6 pt-2 text-xl font-semibold">
                Title :
            </div>
            <div class="w-5/6">
                <input :value="title" @input="changeTitle($event)" type="text"
                    class="rounded-md border border-purple-400 rounded-md shadow-sm px-3 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent w-full">
            </div>
        </div>
        <div class="flex mt-3 w-full">
            <div class="w-1/6 pt-2 text-xl font-semibold">
                Time :
            </div>
            <div class="w-5/6">
                <input type="text" :value="time" @input="changeTime($event)"
                    class="rounded-md border border-purple-400 rounded-md shadow-sm px-3 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent w-full">
            </div>
        </div>
        <div class="flex mt-3 w-full">
            <div class="w-1/6 pt-2 text-xl font-semibold">
                Priority :
            </div>
            <div class="w-5/6">
                <input type="text" :value="priorty" @input="changePriorty($event)"
                    class="rounded-md border border-purple-400 rounded-md shadow-sm px-3 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent w-full">
            </div>
        </div>
        <div class="flex mt-3 w-full">
            <div class="w-1/6 pt-2 text-xl font-semibold">
                Description :
            </div>
            <div class="w-5/6">
                <textarea rows="3" type="text" :value="description" @input="changeDescription($event)"
                    class="rounded-md border border-purple-400 rounded-md shadow-sm px-3 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent w-full">
                </textarea>
            </div>
        </div>
    </div>

    <div class="Edit_Save_Button mt-4">
        <div class="add_button" v-if="getModeEditAdd==='add'">
            <button @click.prevent="saveData()"
                class="py-3 px-8 bg-blue-500 rounded-lg text-white text-center focus:outline-none focus:ring-2 focus:ring-blue-600">
                Add </button>
        </div>
        <div class="edit_button" v-if="getModeEditAdd==='edit'">
            <div class="flex justify-center">
                <button @click.prevent="setCloseModal(false) "
                    class="py-3 px-8 mr-3 bg-white border border-blue-500 rounded-lg text-blue-500 text-center focus:outline-none focus:ring-2 focus:ring-blue-600">
                    Cancel </button>

                <button @click.prevent="saveData()"
                    class="py-3 px-8 bg-blue-500 rounded-lg text-white text-center focus:outline-none focus:ring-2 focus:ring-blue-600">
                    Save </button>
            </div>

        </div>
    </div>

</template>
<script lang="ts">
    import { mapGetters, mapMutations } from 'vuex'
    import { defineComponent} from 'vue'
    import { container } from 'node_modules/tsyringe/dist/typings';


    // const { v4: uuidv4 } = require('uuid');
    // import { v4 as uuidv4 } from 'uuid';


    export default defineComponent({
        data() {
            return {
                title: '',
                time: '',
                priorty: '',
                description: '',
                save: false,
                idUuid: '',
                idTodoList: 0
            }
        },

        computed: {
            ...mapGetters(['getModeEditAdd', 'getIdEditCard', 'getIndexCard', 'getTodoList']),

            firstLoadTitle():string{
                return this.title = this.getTodoList[this.getIndexCard].title;
            },
            firstLoadTime():string{
                return this.time = this.getTodoList[this.getIndexCard].time;
            },
            firstLoadPriorty() :string{
                return this.priorty = this.getTodoList[this.getIndexCard].priorty;
            },
            firstLoadDescription() :string{
                return this.description = this.getTodoList[this.getIndexCard].description;
            },

        },

        mounted() {
            if (this.getIdEditCard===null) {
                this.resetForm()
            } else {
                this.firstLoadTitle;
                this.firstLoadTime;
                this.firstLoadPriorty;
                this.firstLoadDescription
            }
        },

        methods: {
            ...mapMutations(['addTodoList', 'setCloseModal', 'setToggleModal']),

            changeTitle(e:any) {
                this.title = e.target.value
            },

            changeTime(e:any) {
                this.time = e.target.value
            },

            changePriorty(e: any) {
                this.priorty = e.target.value
            },

            changeDescription(e: any) {
                this.description = e.target.value
            },

            saveData() {
                // id maker with timeStamp
                let timestamp = new Date().getUTCMilliseconds();
                let noId = timestamp.toString();


                this.save = true;
                this.idTodoList = this.getIdEditCard;

                if (this.save) {
                    if (this.idTodoList) {
                        this.getTodoList[this.getIndexCard].title = this.title
                        this.getTodoList[this.getIndexCard].time = this.time
                        this.getTodoList[this.getIndexCard].priorty = this.priorty
                        this.getTodoList[this.getIndexCard].description = this.description
                    } 
                    else {
                        let addTodo = {
                            id: noId,
                            title: this.title,
                            priorty: this.priorty,
                            time: this.time,
                            description: this.description
                        }
                        this.addTodoList(addTodo)
                    }
                } 
                else {
                    this.title = this.getTodoList[this.getIndexCard].title
                    this.time = this.getTodoList[this.getIndexCard].time
                    this.priorty = this.getTodoList[this.getIndexCard].priorty
                    this.description = this.getTodoList[this.getIndexCard].description
                }

                this.setCloseModal(false);
            },

            resetForm() {
                this.title = '';
                this.time = '';
                this.priorty = '';
                this.description = '';
            }
        }
    })
</script>