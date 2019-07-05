<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{changeName()}}</p>
        <p>User age: {{userAge}}</p>
        <button @click="resetName()">Change Name</button>
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
// import event Bus from main.js
import {eventBus} from '../main'; //ES6 code to import from another file

export default{
    props: {
        name:{
            type:String
        },
        resetFn:Function,
        userAge:{
            type:Number
        }
    },
    methods:{
        changeName: function() {
            return this.name.split("").reverse().join("");
        },
        resetName: function(){
            this.name = 'Max';
            this.$emit('nameChanged', this.name);
        }
    },
    created(){
        eventBus.$on('ageWasEdited', (age)=>{
            this.userAge=age;
        });
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
