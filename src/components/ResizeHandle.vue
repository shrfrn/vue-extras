<template>
    <div ref="handle" class="resize-handle"
        @mousedown="onMouseDown"
        @mouseup="onMouseUp"></div>
</template>

<script>
    export default {
        props:{
            handle:{
                type: String,
                required: true,
            },
            cursor:{
                type: String,
                required: true,
            },
            top:{
                type: String,
                required: true,
            },
            left:{
                type: String,
                required: true,
            },
            handleSize:{
                type: String,
                default: '7px',
            }
        },
        mounted(){
            const elHandle = this.$refs.handle
            
            elHandle.style.top = this.top
            elHandle.style.left = this.left
            elHandle.style.cursor = this.cursor

            elHandle.style.setProperty('--handle-size', this.handleSize)
        },
        methods:{
            onMouseDown(ev){
                console.log('mouse down')
                const custumEv = { ev, handle: this.handle }
                this.$emit('drag-start', custumEv)
            },
            onMouseUp(ev){
                console.log('mouse up')
                const custumEv = { ev, handle: this.handle }
                this.$emit('drag-end', custumEv)
            },
        },
        watch:{
            top(newVal){
                const elHandle = this.$refs.handle
                elHandle.style.top = newVal
            },
            left(newVal){
                const elHandle = this.$refs.handle
                elHandle.style.left = newVal
            },
        }
    }
</script>

<style lang="scss">
    .resize-handle {
        
        --handle-size: 7px;

        box-sizing: border-box;
        position: absolute;
        transform: translate(-50%, -50%);

        width: var(--handle-size);
        height: var(--handle-size);

        border: 1px solid lightgray;
    }
</style>