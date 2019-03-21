

const simpleQuotes = [
    {
        name:'author 1',
        quote: 'quote 1'
    }
    ,
    {
        name:'author 2',
        quote: 'quote 2'
    }
    ,
    {
        name:'author 3',
        quote: 'quote 3'
    }
    ,
    {
        name:'author 4',
        quote: 'quote 4'
    }
    ,
    {
        name:'author 5',
        quote: 'quote 5'
    }
]
const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor= document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote (){

let number = Math.floor(Math.random()*quote.length);
quoteAuthor.innerHTML = quote[number].name;
quote.innerHTML = quote[number].quote;
}








