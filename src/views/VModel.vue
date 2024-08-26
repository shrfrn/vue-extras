
<template>
    <main>
        <h1>Custom Input Components with v-model</h1>
        
        <!-- For native DOM elements: -->
        <label>
            <span>Native: </span>
            <input :value="txt" @input="txt = $event.target.value" type="text">
            <!-- <input v-model="txt" type="text"> -->
        </label>

        <!-- For custom components: -->
        <label>
            <span>Custom (default): </span>
            <CustomVModel :modelValue="txt" @update:modelValue="updatedVal => txt = updatedVal"/>
            <!-- <CustomVModel v-model="txt" /> -->
        </label>

        <!-- We can use v-model:arg to rename the prop -->
        <label>
            <span>Custom (arg): </span>
            <CustomInput :txt="txt" @update:txt="updatedVal => txt = updatedVal" />
            <!-- <CustomInput v-model:txt="txt" /> -->
        </label>

        <h2>Tag Input</h2>
        <CustomVModelTags v-model:tags="tags" />
        <Inspector />
    </main>
</template>

<script>
import CustomVModelTags from '../components/CustomVModelTags.vue'
import CustomVModel from '../components/CustomVModel.vue';
import CustomInput from '../components/CustomInput.vue';

export default{
    data(){
        return {
            txt: '',
            tags: ['Hello', 'World']
        }
    },
    components:{
        CustomVModel,
        CustomVModelTags,
        CustomInput,
    },
}
</script>

<style>
main {
    display: flex;
    flex-direction: column;
}

main > * {
    margin-bottom: 1em;
}
</style>