<template>
    <div class=" title_add flex font-bold text-xl mt-3 pb-3 border-b relative w-full mx-auto">
        <div v-if="getModeEditAdd==='add'" class="flex rounded-lg z-20 relative bg-white w-full mx-auto">

            <div class="flex w-full">
                <div class="w-full text-center font-bold text-lg ml-4">
                    Ubah Gaji Pokok
                </div>
                <div class="text-left mr-6">
                    <span class="material-icons text-blue-500 font-bold cursor-pointer"
                        @click.prevent="setCloseModal(false)"> close </span>
                </div>
            </div>
        </div>

        <div class="Form_Todo_Edit flex" v-if="getModeEditAdd==='edit'">
            <div class="w-full underline text-center">
                Form Todo Edit
            </div>
            <div class="text-right mr-6">
                <span class="material-icons text-blue-500 font-bold cursor-pointer"
                    @click.prevent="setCloseModal(false)">
                    close </span>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import { mapMutations, mapGetters } from 'vuex'
    import {defineComponent} from 'vue'

    export default defineComponent({
        computed: {
            ...mapGetters(['getModeEditAdd'])
        },

        methods: {
            ...mapMutations(['setCloseModal']),
        }
    })
</script>