<template>
    <div>
        <h4>Quotes Count</h4>
        <div class="progress">
            <div class="progress-bar progress-bar-striped active" role="progressbar"
            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" :style="{width:(quoteCount/maxQuotes) * 100 +'%'}">
            {{quoteCount}} / {{maxQuotes}}
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    props:['quoteCount', 'maxQuotes']
}
</script>

<style>

</style>


