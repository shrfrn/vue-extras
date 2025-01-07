<template>

    <h1 v-colorful:click>Colorful</h1>
    <div class="demo">
        <input v-colorful type="text" />
    </div>

    <h1 v-debounce:click.1000="onClick">Debounce</h1>
    <div class="demo">
        <input v-debounce.1000="onInput" type="text" />
    </div>

    <h1 @click="onClick" v-throttle:click.1000="onThrottledClick" ref="heading">Throttle</h1>
    <div v-throttle:mousemove.300="onThrottledMouseMove" class="demo">
        <h2>Move the mouse over me...</h2>
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
    
</template>

<script>
import { colorful } from '@/directives/colorful.js'
import { clickout } from '@/directives/clickout.js'
import { trackmouse } from '@/directives/trackmouse.js'
import { debounce } from '@/directives/debounce.js'
import { throttle } from '@/directives/throttle.js'

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
        onInput(ev) {
            console.log(ev.target.value)
        },
        onClick(ev) {
            console.log('clicked on', ev.target)
        },
        onThrottledClick() {
            this.$refs.heading.innerText += '.'
        },
        onThrottledMouseMove({ clientX, clientY }) {
            console.log(clientX, clientY)
        },
        onFocus(el) {
            console.log('got focus', el)
        },
        onClickOutside() {
            this.clickedOutside = true
            setTimeout(() => this.clickedOutside = false, 1000)
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
        colorful,
        clickout,
        trackmouse,
        debounce,
        throttle,
    },
}
</script>

<style lang="scss">
h1 {
    margin-block-start: 30px;
    user-select: none;
    cursor: pointer;
    color: black;

    &:active {
        background-color: whitesmoke;
    }
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
