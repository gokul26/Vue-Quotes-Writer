<template>
    <div class="container">
        <app-header :maxQuotes="maxQuote" :quoteCount="quotes.length"></app-header>
        <app-New-Quote @quotePosted="addQuote"></app-New-Quote>
        <hr>
        <app-quote-grid :quotes="quotes" @quoteDelete="delQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center bg-info">
                Info: Click on Quote to Delete it
            </div>
        </div>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid';
import NewQuote from './components/NewQuote';
import Header from './components/header';
import quoteBus from './main';

export default  {
    data: function(){
        return  {
            quotes: ['All is Well','Hello'],
            maxQuote:   10
        }
    },
    components:{
        appQuoteGrid: QuoteGrid,
        appNewQuote: NewQuote,
        appHeader: Header
    },
    methods:{
        addQuote:function(quote){
            if(this.quotes.length >= this.maxQuote)
            {
                return alert('Delete Some QUotes First');
            }
            else
            {
                this.quotes.unshift(quote);
            }
        },
        delQuote:function(quote){
            this.quotes.splice(quote,1);
        }
    }
}
</script>

<style>
</style>
