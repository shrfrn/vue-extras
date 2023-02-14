<template>
    <div class="about">
        <SlotCmp>
            
            <template v-slot:slot1>
                <p>Hi there</p>
                <input type="text">
            </template>

            <!-- <template v-slot:slot2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nesciunt.</p>
            </template> -->

        </SlotCmp>
        <Resizeable>
            <h2>Baba</h2>
        </Resizeable>
    </div>
</template>
<script>
import SlotCmp from '@/components/SlotCmp.vue'
import Resizeable from '@/components/Resizeable.vue'
export default {
    components: {
        SlotCmp,
        Resizeable
    }
}
</script>
<style>
* {
    box-sizing: border-box;
}
</style>
