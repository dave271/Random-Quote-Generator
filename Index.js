$(document).ready(function(){

function getNewQuote(){
    $.ajax({
        url: 'http://api.forismatic.com/api/1.0/',
        jsonp: 'jsonp',
        dataType: 'jsonp',
        data: {
            method: 'getQuote',
            lang: 'en',
            format: 'jsonp',
        },
        success: function(res){
            quote = res.quoteText;
            console.log(quote);
            author = res.quoteAuthor;

            $('#text').text(quote);

            if(author){
            $('#author').text('- ' + author);
            } else{
                $('#author').text('- ' + Unknown);
            }
        }
    });
}

getNewQuote();

$('.getQuote').on('click', function(event){
    event.preventDefault();
    getNewQuote();
});

$('.tweetquote').on('click', function(event){
    event.preventDefault();

    window.open("https://twitter.com/intent/tweet?text=" + quote + " &hashtags=inspiration");
})



});