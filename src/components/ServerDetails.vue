<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
        <p v-if="!server">Server Details are currently not updated</p>
        <p v-else>Server #{{ server.id }} selected, Status: {{ server.status }}</p>
        <button @click="changeStatus">Change To Normal</button>
    </div>

</template>

<script>
import {serverBus} from '../main';

export default{
    data:function(){
        return {
            server: null
        }
    },
    methods:{
        changeStatus: function(){
            this.server.status = 'normal';
        }
    },
    created(){
            serverBus.$on('serverSelected', (server) => {
                this.server = server;
            });
    }
}

</script>

<style>

</style>
