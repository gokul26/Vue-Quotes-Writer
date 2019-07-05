<template>
    <li class="list-group-item" @click="getStatus">
        Server #{{ server.id }}
    </li>
</template>

<script>

import {serverBus} from '../main';

export default{
    props:['server'],
    methods:{
        getStatus:function(){
            serverBus.$emit('serverSelected', this.server);
        }
    }
}

</script>

<style>

</style>
