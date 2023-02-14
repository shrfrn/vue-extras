<template>
    <div
        class="resizeable"
        ref="container"
        v-trackevent:mousemove="onMouseMove"
    >
        <ResizeHandle
            v-if="mounted"
            v-for="(cursor, handle) in handles"
            :handle="handle"
            :cursor="cursor"
            :top="handleTop(handle)"
            :left="handleLeft(handle)"
            @drag-start="onDragStart"
            @drag-end="onDragEnd"
        />
        <slot></slot>
    </div>
</template>

<script>
import ResizeHandle from '@/components/ResizeHandle.vue'
import { trackevent } from '@/directives/trackevent.js'
export default {
    data() {
        return {
            mounted: false,
            rect: {
                top: -1,
                left: -1,
                width: -1,
                height: -1,
            },

            isDragging: false,
            dragHandle: '',
            prevX: -1,
            prevY: -1,
            initialTop: -1,
            initialLeft: -1,

            handles: {
                n: 'ns-resize',
                ne: 'nesw-resize',
                e: 'ew-resize',
                se: 'nwse-resize',
                s: 'ns-resize',
                sw: 'nesw-resize',
                w: 'ew-resize',
                nw: 'nwse-resize',
            },
        }
    },
    mounted() {
        const elContainer = this.$refs.container
        const rect = elContainer.lastElementChild.getBoundingClientRect()

        this.rect.top = rect.top
        this.rect.left = rect.left
        this.rect.width = rect.width
        this.rect.height = rect.height

        this.initialTop = rect.top
        this.initialLeft = rect.left

        this.mounted = true
        // elContainer.style.top = 0 + 'px'
        // elContainer.style.left = 0 + 'px'
        elContainer.style.width = this.rect.width + 'px'
        elContainer.style.height = this.rect.height + 'px'
    },
    methods: {
        handleTop(handle) {
            console.log('Hi')
            switch (handle) {
                case 'n':
                case 'ne':
                case 'nw':
                    return '0'
                case 's':
                case 'se':
                case 'sw':
                    return this.rect.height - 1 + 'px'
                case 'e':
                case 'w':
                    return this.rect.height / 2 + 'px'
                default:
                    console.log('bad handle')
            }
        },
        handleLeft(handle) {
            switch (handle) {
                case 'w':
                case 'nw':
                case 'sw':
                    return '0'
                case 'e':
                case 'ne':
                case 'se':
                    return this.rect.width - 1 + 'px'
                case 'n':
                case 's':
                    return this.rect.width / 2 + 'px'
                default:
                    console.log('bad handle')
            }
        },
        onDragStart(custumEv) {
            this.isDragging = true

            this.prevX = custumEv.ev.clientX
            this.prevY = custumEv.ev.clientY
            this.dragHandle = custumEv.handle
        },
        onDragEnd() {
            this.isDragging = false
        },
        resize(ev) {
            const elContainer = this.$refs.container

            this.calcRect(ev)

            // elContainer.style.top = this.rect.top - this.initialTop + 'px'
            // elContainer.style.left = this.rect.left - this.initialLeft + 'px'
            elContainer.style.width = this.rect.width + 'px'
            elContainer.style.height = this.rect.height + 'px'

            // this.rect = elContainer.getBoundingClientRect()
            this.getBoundingRect()
            this.initialTop += ev.ClientY - this.prevY
            this.initialLeft += ev.ClientX - this.prevX
            this.prevX = ev.clientX
            this.prevY = ev.clientY
        },
        getBoundingRect(){
            const elContainer = this.$refs.container
            const rect = elContainer.getBoundingClientRect()

            this.rect.top = rect.top
            this.rect.left = rect.left
            this.rect.width = rect.width
            this.rect.height = rect.height
        },
        calcRect(ev) {
            var dx = ev.clientX - this.prevX
            var dy = ev.clientY - this.prevY

            switch (this.dragHandle) {
                case 'n':
                    this.rect.height -= dy
                    this.rect.top += this.initialTop - dy
                    break
                case 'ne':
                    this.rect.height -= dy
                    this.rect.top += dy
                    this.rect.width += dx
                    break
                case 'sw':
                    this.rect.height += dy
                    this.rect.width -= dx
                    this.rect.left += dx
                    break
                case 'nw':
                    this.rect.height -= dy
                    this.rect.width -= dx
                    this.rect.left += dx
                    this.rect.top += dy
                    break
                case 'e':
                    this.rect.width += dx
                    break
                case 'se':
                    this.rect.height += dy
                    this.rect.width += dx
                    break
                case 's':
                    this.rect.height += dy
                    break
                case 'w':
                    this.rect.left += dx
                    this.rect.width -= dx
                    break
            }
        },
    },
    computed: {
        onMouseMove() {
            return this.isDragging ? this.resize : null
        },
    },
    components: {
        ResizeHandle,
    },
    directives: {
        trackevent,
    },
}
</script>

<style lang="scss">
.resizeable {
    position: relative;
    border: 1px solid lightgray;

    & > *{
        position: absolute;
        color: red;
    }
}
</style>
