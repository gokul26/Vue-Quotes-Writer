<template>
    <div class="col-sm-6 com-md-4 col-lg-3">
        <div class="panel panel-default">
            <div class="panel-body quote">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .panel-body{
        font-size: 22px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        box-shadow: 1px 1px 1px 1px darkgray;       
        margin-bottom: 25px;    
        padding: 20px;
    }

    .quote:hover{
        background: lightgray;
        cursor: pointer;
    }
</style>


