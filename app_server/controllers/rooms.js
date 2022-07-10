var fs = require('fs');

var roomType = JSON.parse(fs.readFileSync('./data/roomType.json', 'utf8'));
var navigation = JSON.parse(fs.readFileSync('./data/navigation.json', 'utf8'));

/* GET Rooms view */
const rooms = (req, res) => {
    res.render('rooms', { title: 'Travlr Getaways', roomType, navigation });
   };
   module.exports = {
    rooms
   };