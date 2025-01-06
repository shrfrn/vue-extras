<template>
    <input :value="str" @input="onInput" type="text">
</template>

<script>
    export default {
        props:{
            modelValue: {
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
            this.str = this.modelValue
        },
        methods:{
            onInput(ev){
                this.str = ev.target.value
                this.$emit('update:modelValue', this.str)
            }
        }
    }
</script>

<style lang="scss">

</style>