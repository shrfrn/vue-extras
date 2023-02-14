<template>
    <main>
        <section class="controls">
            <button @click="showModal = !showModal">
                {{ showModal ? 'Close Modal' : 'Open Modal' }}
            </button>     
               
            <button @click="track = !track">
                {{ track ? 'Stop Tracking' : 'Start Tracking' }}
            </button>        
        </section>
        
        <SlotedModal @cancel="onCancel" @confirm="onConfirm" v-if="showModal">
            <template v-slot:header>Hi</template>
            <!-- <template v-slot:header><input type="text"></template> -->
            <template #body>
                <p @click="sayHello" v-trackmouse:track="trackMouse">x : {{x}} y : {{y}}</p>
                <input v-colorful v-model="txt" type="text">
            </template>
            <!-- <template #footer>
                <input type="radio">
            </template> -->
        </SlotedModal>
        <Inspector />
    </main>
</template>

<script>
import SlotedModal from '@/components/SlotedModal.vue'

export default {
    data(){
        return {
            showModal: false,
            track: true,
            x: 0, y: 0,
            txt: 'baba',
        }
    },
    methods:{
        trackMouse(x, y){
            this.x = x
            this.y = y
        },
        onCancel(){
            console.log('Canceled')
            this.showModal = false
        },
        onConfirm(){
            console.log('Confirmed')
            this.showModal = false
        },
        sayHello(){ console.log('Say Hello...') }
    },
    components:{
        SlotedModal,
    }
}
</script>
<style>
.controls{
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    width: max-content;
    margin: 100px auto;
}
</style>