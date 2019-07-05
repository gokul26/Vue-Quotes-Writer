import Vue from 'vue'
import App from './App.vue'
export const eventBus = new Vue(); 
export const serverBus = new Vue(); 
new Vue({
  el: '#app',
  render: h => h(App)
})
