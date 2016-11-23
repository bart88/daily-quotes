var Xray = require("x-ray");

var xray = new Xray({
  filters: {
    trimText: function (value) {
      return value.trim().split('\n')[0];
    },
    stripQuotes: function(value) {
      return value.replace(/[“”]+/g, '');
    }
  }
});

xray('http://www.goodreads.com/quotes/tag/love', 'div.quoteDetails', [{
  text: '.quoteText | trimText | stripQuotes',
  author: '.quoteText a'
}])
  .paginate('a.next_page[rel="next"]@href')
  .limit(10)
  .write('src/quotes.json');
