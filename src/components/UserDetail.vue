<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{changeName()}}</p>
        <button @click="resetName()">Change Name</button>
    </div>
</template>

<script>
export default{
    props: ['name'],
    methods:{
        changeName: function() {
            return this.name.split("").reverse().join("");
        },
        resetName: function(){
            this.name = 'Max';
            this.$emit('nameChanged', this.name);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
