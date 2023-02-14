<template>
    <section class="yesno">
        <p>
            Ask a yes/no question:
            <input v-model="question" />
        </p>
        <p>{{ answer }}</p>
    </section>
    
    <section class="car">
        <input v-model="car.vendor" />
        <button @click="onChangeCar">Change car</button>
    </section>
    <Inspector />
</template>

<script>
export default {
    data() {
        return {
            question: '',
            answer: 'Questions usually contain a question mark. ;-)',

            car: { vendor: 'Subali', speed: 100 }
        }
    },
    watch: {
        // whenever question changes, this function will run
        question(newQuestion, oldQuestion) {
            console.log('newQuestion, oldQuestion: ', newQuestion, oldQuestion)
            if (newQuestion.includes('?')) {
                this.getAnswer()
            }
        },
        'car.vendor': {
            handler(newVal, oldVal){
                console.log(newVal);
            },
            // deep: true,
        }
    },
    methods: {
        async getAnswer() {
            this.answer = 'Thinking...'
            try {
                const res = await fetch('https://yesno.wtf/api')
                this.answer = (await res.json()).answer
            } catch (error) {
                this.answer = 'Error! Could not reach the API. ' + error
            }
        },
        onChangeCar(){
            this.car = { vendor: 'Susila', speed: 1 }
        }
    },
}
</script>

<style lang="scss">
.yesno, .car {
    background-color: lightgray;
    padding: 10px;
    margin-block-start: 4em;
}
</style>
