import tInput from './Input/Input.vue'
const GlobalComponents = {
    install(Vue) {
      // Mologiz
      Vue.component('t-input', tInput);
    }
  };
  
export default GlobalComponents;