<script>
import SimpleComponent from '@/components/SimpleComponent.vue'
export default {
    data(){
        return {
            num: 4
        }
    },
    components:{
        SimpleComponent,
    }
}
</script>

<template>
    <main>
        <SimpleComponent :prop1="num" prop2="Hi"/>
    </main>
</template>
