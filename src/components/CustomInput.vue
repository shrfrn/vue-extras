<template>
    <input :value="str" @input="onInput" type="text">
</template>

<script>
    export default {
        props:{
            txt: {
                type: String,
                default: '',
            }
        },
        data() {
            return {
                str: '',
            }
        },
        created() {
            this.str = this.txt
        },
        methods:{
            onInput(ev){
                this.str = ev.target.value
                this.$emit('update:txt', this.str)
            }
        }
    }
</script>

<style lang="scss">

</style>