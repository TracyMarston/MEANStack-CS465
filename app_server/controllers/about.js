
var fs = require('fs');
var navigation = JSON.parse(fs.readFileSync('./data/navigation.json', 'utf8'));



/* GET About view */
const about = (req, res) => {
    res.render('about', { title: 'Travlr Getaways', navigation });
   };
   module.exports = {
    about
   };