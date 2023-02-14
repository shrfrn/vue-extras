<template>
    <h1>Slots!</h1>
    
    <slot name="slot1"></slot>
    
    <slot name="slot2">
        <h1>Hello</h1>
    </slot>
</template>

<script>
    export default {
        data(){
            return {
                
            }
        }
    }
</script>

<style lang="scss">

</style>