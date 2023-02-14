<template>
    <section class="dynamic-headings">
        <select v-model="cmpType">
            <option>h1</option>
            <option>h2</option>
            <option>h3</option>
            <option>h4</option>
            <option>h5</option>
            <option>div</option>
            <option>button</option>
        </select>
        <section class="dynamic-cmp">
            <component :is="cmpType">This is a Dynamic Component</component>
        </section>
        <pre>{{ $data }}</pre>
    </section>
</template>

<script>
export default {
    data() {
        return {
            cmpType: 'h1',
        }
    },
}
</script>

<style lang="scss">
.dynamic-headings {
    select {
        width: 100px;
        height: 2em;
        margin-block-start: 4em;
        padding-inline-start: 10px;
        font-size: 1em;
        border-radius: 4px;
        border: 1px solid lightgrey;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        padding: 0;
        margin: 0;
    }
    div {
        padding-inline: 10px;
        background-color: lightblue;
        font-family: monospace;
        font-weight: bold;
    }
    .dynamic-cmp {
        display: flex;
        align-items: center;

        width: 300px;
        height: 3em;
        margin-block: 2em;
        border: 1px solid lightgrey;
        border-radius: 4px;
        padding: 10px;
    }
}
</style>
