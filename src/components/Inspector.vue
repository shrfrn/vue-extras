<template>
    <section @click="expanded = !expanded" class="inspector" :class="mode">
        <div v-if="hasData" class="data">
            <h2>data:</h2>
            <pre>{{ $parent.$data }}</pre>
        </div>
        <div v-if="hasProps" class="data">
            <h2>props:</h2>
            <pre>{{ $parent.$props }}</pre>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            expanded: false,
        }
    },
    computed: {
        mode() { return this.expanded ? 'expanded' : 'minimized' },
        hasProps(){
            return !!Object.keys(this.$parent.$props).length
        },
        hasData(){
            return !!Object.keys(this.$parent.$data).length
        },
    },
}
</script>

<style lang="scss">
.inspector {
    position: fixed;
    top: 10px;
    right: 10px;
    padding: 5px;

    width: min-content;
    height: min-content;

    border: 1px solid lightgray;
    box-shadow: 2px 1px 6px rgb(219, 219, 219);
    background-color: whitesmoke;
    // transition: all .6s;

    overflow: scroll;
    .data h2, .props h2{
        font-weight: bold;
        background-color: lightgray;
        padding-inline-start: 4px;
    }
}
.minimized{
    transform-origin: top right;
    width: 50px;
    height: 50px;
    border-radius: 50%;

    & > * {
        opacity: 0;
        // display: none;
    }
}
</style>
