var fs = require('fs');

var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
var navigation = JSON.parse(fs.readFileSync('./data/navigation.json', 'utf8'));


/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways | Travel', trips, navigation });
   };
   module.exports = {
    travel
   };