<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server 
            v-for="server in servers" 
            v-bind:server="server">
            </app-server>
        </ul>
    </div>
</template>

<script>

// importing from the Server File

import Server from './Server';

export default{
    data: function(){
        return{
            servers: [
                {id:1, status:'Normal'},
                {id:2, status:'Unknown'},
                {id:3, status:'Critical'},
                {id:4, status:'Normal'}
            ]
        }
    },
    components:{
        appServer:Server
    }
}
</script>

<style>

</style>
