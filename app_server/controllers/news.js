
var fs = require('fs');

var newsItems = JSON.parse(fs.readFileSync('./data/newsItems.json', 'utf8'));

var navigation = JSON.parse(fs.readFileSync('./data/navigation.json', 'utf8'));

/* GET About meals */
const news = (req, res) => {
    res.render('news', { title: 'Travlr Getaways', newsItems, navigation });
   };
   module.exports = {
    news
   };