import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { trackmouse } from '@/directives/trackmouse.js'
import { clickout } from '@/directives/clickout.js'
import { colorful } from '@/directives/colorful.js'

import Inspector from '@/components/Inspector.vue'

const app = createApp(App)

app.use(router)
app.directive('trackmouse', trackmouse)
app.directive('clickout', clickout)
app.directive('colorful', colorful)

app.component('Inspector', Inspector)

app.mount('#app')
