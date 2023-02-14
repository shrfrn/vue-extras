<template>
    <section class="simple-component">
        <input v-model="txt" type="text" />
        <input v-model="num" type="number" ref="num"/>
        <input v-model="user.age" type="number" />
    </section>
    <Inspector />
</template>

<script>
export default {
    props: ['prop1', 'prop2'],
    data() {
        return {
            txt: 'baba',
            num: 2,
            pets: [1, 2, 3],
            user: { name: 'puki', age: 20 },
        }
    },
    mounted() {
        this.$refs.num.focus()
    }
}
</script>

<style lang="scss">
.simple-component {
    display: flex;
    flex-direction: column;
    align-items: start;

    width: 300px;
    background-color: lightgray;
    padding: 10px;
    margin-block-start: 4em;

    & > input:not(:last-child) {
        margin-block-end: 10px;
    }
}
</style>
