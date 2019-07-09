<template>
    <div class="row">
        <form >
        <div class="col-sm-8 co-sm-offset-2 col-md-6 co-md-offset-3">
            <label>Add Quote Here</label>
            <textarea class="form-control" name="" id="" cols="150"  rows="3" v-model="quote"></textarea>
        </div>
        <div class="col-sm-8 co-sm-offset-2 col-md-6 co-md-offset-3">
            <button class="btn btn-sm btn-primary" @click.prevent="createNew">Add Quote</button>
        </div>
        </form>
    </div>
    
</template>

<script>
export default {
    data:   function(){
        return  {
            quote:''
        }
    },
    methods:{
        createNew: function(){
            this.$emit('quotePosted', this.quote);
            this.quote = '';
        }
    }
}
</script>

<style>

</style>


