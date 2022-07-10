var fs = require('fs');

var newsItems = JSON.parse(fs.readFileSync('./data/newsItems.json', 'utf8'));
var navigation = JSON.parse(fs.readFileSync('./data/navigation.json', 'utf8'));

/* GET homepage */
const index = (req, res) => {
    res.render('index', {title: 'Travlr Getaway', newsItems, navigation });
};
module.exports = {
    index
};

