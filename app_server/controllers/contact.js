var fs = require('fs');
var navigation = JSON.parse(fs.readFileSync('./data/navigation.json', 'utf8'));

/* GET Contact view */
const contact = (req, res) => {
    res.render('contact', { title: 'Travlr Getaways', navigation });
   };
   module.exports = {
    contact
   };