
<template>
    <main>
        <h1>Custom Input Component with v-model</h1>
        
        <CustomVModel v-model="txt"/>
        <CustomVModelTime v-model:min="min" v-model:sec="sec"/>
        <CustomTagsInput />
        <CustomVModelTags v-model:tags="tags" />
        
        <Inspector />
    </main>
</template>

<script>
import CustomVModel from '@/components/CustomVModel.vue'
import CustomVModelTime from '@/components/CustomVModelTime.vue'
import CustomTagsInput from '@/components/CustomTagsInput.vue'
import CustomVModelTags from '@/components/CustomVModelTags.vue'

export default{
    data(){
        return {
            txt: '',
            min: 0,
            sec: 0,
            tags: ['Hello', 'World']
        }
    },
    components:{
        CustomVModel,
        CustomVModelTime,
        CustomTagsInput,
        CustomVModelTags,
    },
}
</script>
<style>
main > * {
    margin-bottom: 20px;
}
</style>