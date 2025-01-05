<template>
    <h2>Demo I</h2>
	<section class="yesno">
		<p>
			Ask a yes/no question:
			<input v-model="question" />
		</p>
		<p>{{ answer }}</p>
	</section>

    <h2>Demo II</h2>
	<section class="car">
		<input v-model="car.vendor" />
		<button @click="onChangeCar">Change car</button>
		<button @click="onChangeVendor">Change vendor</button>
	</section>
	<Inspector />
</template>

<script>
export default {
	data() {
		return {
			question: '',
			answer: 'Questions usually contain a question mark. ;-)',

			car: { vendor: 'Subali', speed: 100 },
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

		car(newCar, oldCar) {
			console.log(`${oldCar.vendor} -> ${newCar.vendor}`)
		},

		// 'car.vendor': {
		// 	handler(newVal, oldVal) {
		// 		console.log(`${newVal} -> ${oldVal}`)
		// 	},
		// },

		// car: {
		// 	handler(newVal, oldVal) {
		// 		console.log(`${oldCar.vendor} -> ${newCar.vendor}`)
		// 	},
		// 	deep: true,
		// },
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
		onChangeCar() {
			this.car = { vendor: 'Susila', speed: 1 }
		},
		onChangeVendor() {
			this.car.vendor = 'Susila'
		},
	},
}
</script>

<style lang="scss">
.yesno, .car {
	background-color: lightgray;
	padding: 10px;
    margin-block-end: 4em;
}

.car {
    display: flex;
    gap: .5em;
}
</style>
