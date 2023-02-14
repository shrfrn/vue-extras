<template>
    <input :value="modelValue" @input="onInput" type="text">
</template>

<script>
    export default {
        props:{
            modelValue: {
                type: String,
                default: '',
            }
        },
        methods:{
            onInput(ev){
                this.$emit('update:modelValue', ev.target.value)
            }
        }
    }
</script>

<style lang="scss">

</style>