<template>
    <div class="tag-input">
        <div v-for="(tag, idx) in tags" class="tag">
            <span @click="removeTag(idx)" class="close-btn">x</span>
            <span class="tag-text">{{tag}}</span>
        </div>
        <input v-model="txt" @keyup.enter="addTag" @keyup.delete="popTag" placeholder="type tag..." type="text">
    </div>
</template>

<script>
    export default {
        props:{
            tags: {
                type: Array,
                required: true,
            }
        },
        data(){
            return {
                txt: '',
            }
        },
        methods:{
            addTag(){
                if(!this.txt) return
                this.tags.push(this.txt)
                this.txt = ''
                this.$emit('update:tags', this.tags)
            },
            popTag(){
                if(this.txt) return
                this.tags.pop()
                this.$emit('update:tags', this.tags)
            },
            removeTag(idx){
                this.tags.splice(idx, 1)
                this.$emit('update:tags', this.tags)
            }
        }
    }
</script>

<style lang="scss">
.tag-input{
    --spacing: 10px;
    display: flex;
    flex-wrap: wrap;

    border: 1px solid lightgray;
    border-radius: 10px;

    padding: 0 var(--spacing) var(--spacing);

    .tag {

        background-color: lightgray;
        color: rgb(112, 111, 111);
        
        padding: 4px 12px 6px;
        border-radius: 100vmax;
        margin-inline-end: var(--spacing);
        margin-block-start: var(--spacing);

        .close-btn{
            margin-inline-end: 10px;
            cursor: pointer;
        }
    }
    input{
        flex-grow: 1;
        border: none;
        outline: none;
        margin-block-start: 10px;

        &::placeholder{
            color: lightgray;
        }
    }
}
</style>