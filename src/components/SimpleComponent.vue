<template>
    <h1 ref="heading">Using <span>$refs</span> to directly access DOM elements</h1>
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
    methods: {
        logMouseCoords({ clientX, clientY }) {
            console.log(clientX, clientY)
        },
        getHeadingSize() {
            const rect = this.$refs.heading.getBoundingClientRect()
            console.log(rect)
        }
    },
    mounted() {
        addEventListener('resize', this.getHeadingSize)
        this.$refs.num.focus()
        this.$refs.num.addEventListener('mousemove', this.logMouseCoords)
    },
    beforeUnmount() {
        removeEventListener('resize', this.getHeadingSize)
        this.$refs.num.removeEventListener('mousemove', this.logMouseCoords)
    }
}
</script>

<style lang="scss">
.simple-component {
    display: flex;
    flex-direction: column;
    align-items: start;

    width: max-content;
    background-color: lightgray;
    padding: 10px;
    margin: 4em auto 0;

    & > input:not(:last-child) {
        margin-block-end: 10px;
    }
}

</style>
