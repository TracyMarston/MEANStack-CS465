var fs = require('fs');

var mealOptions = JSON.parse(fs.readFileSync('./data/mealOptions.json', 'utf8'));
var navigation = JSON.parse(fs.readFileSync('./data/navigation.json', 'utf8'));


/* GET About meals */
const meals = (req, res) => {
    res.render('meals', { title: 'Travlr Getaways', mealOptions, navigation });
   };
   module.exports = {
    meals
   };