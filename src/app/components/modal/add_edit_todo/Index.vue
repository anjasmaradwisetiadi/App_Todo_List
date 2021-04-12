<template>
    <div class="modal_Edit_and_Add" v-if="getToggleModal">
        <div class="content_modal flex justify-center text-center fixed z-30 w-full pt-14">
            <div
                class="flex flex-col bg-white rounded-lg py-4 mt-3 pb-6 border rounded-lg z-20 relative bg-white w-1/2 mx-auto shadow-lg px-8">
                <Header></Header>
                <Form></Form>
                <!-- <EditButton @buttonStateSave="buttonStateSave"></EditButton> -->
            </div>
        </div>
        <div class="layer_shadow_modal z-20 bg-gray-800 fixed opacity-50" :style="sizeShadowModal">
        </div>
    </div>
</template>
<script lang="ts">
    import {
        mapGetters
    } from 'vuex'
    import {
        defineComponent
    } from 'vue'
    // import EditButton from './component/EditButton.vue'
    import Form from './component/Form.vue'
    import Header from './component/Header.vue'

    // import "reflect-metadata";
    // import {container} from "tsyringe";
    // import {serviceModal} from "../../../../data/service/service";

    // const instance =container.resolve(serviceModal)

    export default defineComponent({
        components: {
            Header,
            Form,
        },

        data(){
            return{
            }

        },

        computed: {
            ...mapGetters(['getToggleModal', 'widthModal', 'heightModal']),

            sizeShadowModal(): any {
                return {
                    width: `${this.widthModal}px`,
                    height: `${this.heightModal}px`
                }
            },
        },

        // methods:{
        //     buttonStateSave(value:boolean){
        //         this.stateSaveEdit=value
        //     }
        // }
    })
</script>