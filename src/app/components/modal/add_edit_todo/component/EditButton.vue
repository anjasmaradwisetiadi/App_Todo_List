<template>
    <div class="Edit_Save_Button mt-4">
        <div class="add_button" v-if="getModeEditAdd==='add'">
            <button @click.prevent="saveData()"
                class="py-3 px-8 bg-blue-500 rounded-lg text-white text-center focus:outline-none focus:ring-2 focus:ring-blue-600">
                Add </button>
        </div>
        <div class="edit_button" v-if="getModeEditAdd==='edit'">
            <div class="flex justify-center">
                <button @click.prevent="saveData()"
                    class="py-3 px-8 mr-3 bg-white border border-blue-500 rounded-lg text-blue-500 text-center focus:outline-none focus:ring-2 focus:ring-blue-600">
                    Cancel </button>

                <button @click.prevent="setCloseModal(false)"
                    class="py-3 px-8 bg-blue-500 rounded-lg text-white text-center focus:outline-none focus:ring-2 focus:ring-blue-600">
                    Save </button>
            </div>

        </div>
    </div>
</template>
<script lang="ts">
    import {mapMutations,mapGetters} from 'vuex';
    import {defineComponent} from 'vue'


    export default defineComponent({
        computed: {
            ...mapGetters(['getModeEditAdd'])

        },

        methods: {
            ...mapMutations(['setCloseModal','buttonAddTodoList']),

            saveData(){
                this.buttonAddTodoList(true)
                this.setCloseModal(false)
                this.$emit("buttonStateSave",true)
            }
        }
    })
</script>