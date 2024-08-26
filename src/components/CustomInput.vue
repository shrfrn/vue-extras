<template>
    <input :value="txt" @input="onInput" type="text">
</template>

<script>
    export default {
        props:{
            txt: {
                type: String,
                default: '',
            }
        },
        methods:{
            onInput(ev){
                this.$emit('update:txt', ev.target.value)
            }
        }
    }
</script>

<style lang="scss">

</style>