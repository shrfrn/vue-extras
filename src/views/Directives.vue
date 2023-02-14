<template>
    <h1>Auto Focus</h1>
    <div class="demo">
        <input type="text" placeholder="not focused" />
        <input
            v-autofocus
            type="text"
            placeholder="this input is autofocused..."
        />
    </div>

    <h1 v-colorful:click>Colorful</h1>
    <div class="demo" track>
        <input v-colorful type="text" />
    </div>

    <h1>On Focus</h1>
    <div class="demo">
        <input v-focus="onFocus" type="text" />
    </div>

    <h1>Click Outside</h1>
    <div v-clickout="onClickOutside" class="demo" :class="bgcClass"></div>

    <h1>Track Mouse</h1>
    <div v-trackmouse:trackMouse="onMouseMove" track class="demo trackmouse">
        <h3 class="coords">x:{{ mouse.x }} , y:{{ mouse.y }}</h3>
        <button @click="trackMouse = !trackMouse">{{
            trackMouse ? 'Stop Tracking' : 'Start Tracking'
        }}</button>
    </div>

    <h1 track>Track Event</h1>
    <input type="text" track />
    <p>baba</p>

    <div v-trackevent:[evType]="tracker" class="demo trackevent">
        <h3 class="coords">x:{{ ev.x }} , y:{{ ev.y }}</h3>
        <button @click="trackEvent = !trackEvent">{{
            trackEvent ? 'Stop Tracking' : 'Start Tracking'
        }}</button>
        <button @click="toggleEvType">{{
            evType === 'click' ? 'mousemove' : 'click'
        }}</button>
    </div>
</template>

<script>
import { autofocus } from '@/directives/autofocus.js'
import { colorful } from '@/directives/colorful.js'
import { focus } from '@/directives/focus.js'
import { clickout } from '@/directives/clickout.js'
import { trackmouse } from '@/directives/trackmouse.js'
import { trackevent } from '@/directives/trackevent.js'

export default {
    data() {
        return {
            trackMouse: false,
            track: false,
            trackEvent: false,
            evType: 'mousemove',
            clickedOutside: false,
            mouse: { x: 0, y: 0 },
            ev: { x: 0, y: 0 },
        }
    },
    methods: {
        onFocus(el) {
            console.log('got focus', el)
        },
        onClickOutside() {
            this.clickedOutside = true
            setTimeout(() => this.clickedOutside = false, 1000)
            console.log('clicked outside..')
        },
        onMouseMove(x, y) {
            this.mouse.x = x 
            this.mouse.y = y
        },
        onTrackEvent({ clientX, clientY }) {
            this.ev.x = clientX
            this.ev.y = clientY
        },
        toggleEvType() {
            this.evType = this.evType === 'mousemove' ? 'click' : 'mousemove'
        },
    },
    computed: {
        tracker() {
            return this.trackEvent ? this.onTrackEvent : null
        },
        bgcClass(){ return this.clickedOutside ? 'clicked-outside' : '' }
    },
    directives: {
        autofocus,
        colorful,
        focus,
        clickout,
        trackmouse,
        trackevent,
    },
}
</script>

<style lang="scss">
h1 {
    margin-block-start: 30px;
}
h3 {
    font-family: monospace;
}
.demo {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: start;

    background-color: lightblue;
    padding: 20px 10px;

    transition: background-color .3s ease-in;

    & > *:not(:last-child) {
        margin-block-end: 10px;
    }
    .coords {
        position: absolute;
        right: 20px;
        bottom: 10px;
        margin: 0;
    }
}
.clicked-outside {
    background-color: rgb(240, 194, 108);
}
.trackmouse {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-inline: 20px;
}
</style>
