<template>
    <div class="time-input">
        <input :value="min" @input="onInputMin" type="text"> :
        <input :value="sec" @input="onInputSec" type="text">
    </div>
</template>

<script>
    export default {
        props:['min', 'sec'],
        methods:{
            onInputMin(ev){
                this.$emit('update:min',ev.target.value)
            },
            onInputSec(ev){
                this.$emit('update:sec', ev.target.value)
            }
        }
    }
</script>

<style lang="scss">

.time-input { 
    background-color: lightblue;
    padding: 10px;
    width: max-content;
    border-radius: 10px;

    input{
        width: 40px;
        text-align: center;
    }
}
</style>