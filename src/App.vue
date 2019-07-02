<template>
    <div class="container">
        <!-- <app-header></app-header> -->
        <hr>
        <div class="row">
            <!-- <app-servers></app-servers> -->
            <!-- <app-server-details></app-server-details> -->
            <app-user></app-user>
        </div>
        <hr>
        <!-- <app-footer></app-footer> -->
    </div>
</template>

<script>
    // import Header from './components/Header.vue';
    // import Footer from './components/Footer.vue';
    // import Servers from './components/Servers.vue';
    // import ServerDetails from './components/ServerDetails.vue';
    import User from './components/User.vue';

    export default {
        components: {
            'appUser': User
        }
    }
</script>

<style>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }

</style>
