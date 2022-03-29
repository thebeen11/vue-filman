<template>
    <div>
    <p>{{label}}</p>
    <input @input="$emit('input', $event.target.value)"  v-bind="$attrs">
    </div>
</template>

<script>
export default {
    name: 't-input',
    props:{
        
        label:{
            type: String
        },
    },
    data() {
        return{
        // aa: null
           
        }
    },
    mounted(){
        console.log(this.$event.target.value,"w");
    },
    computed(){
        return {
            ...this.$listeners,
            input: this.updateValue
        }
    },
    methods:{
        updateValue(e) {
            let value = e.target.value;
            this.$emit("input", value);
        },
    }
}
</script>

<style scoped>
    input{
    width: 100%;
    height: 38px;
    font-weight: 300;
    font-size: 10px;
    line-height: 14px;
    border-radius: 0.4rem;
    border: 2px solid var(--color-footer);
    padding: 0 1rem;
    margin-bottom: 2rem;
    outline: #C4C4C4 solid 1px;
    color: #313131;
    }
    
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: red;
  opacity: 1; /* Firefox */
}
    p{
    text-align: left;
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
    margin-bottom: 0.4rem;
    color: #4D4D4D;
  }
</style> 