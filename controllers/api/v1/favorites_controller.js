// favoritesController
var application = require('./index.js');
var User = application.user;
var Location = application.location;

async function create(req, res) {
  let user = await User.findOne({where: {apiKey:req.body.apiKey}});
  let [city, state] = req.body.location.split(',');
  state = state.trim().toLowerCase();
  city = city.trim().toLowerCase();
  let location = await Location.findOne({where:
    {city: city, state: state}
  });

  if (user) {
    cityFavorited = await user.hasLocation(location);

    if (cityFavorited) {
      res.status(200).send({message: 'You already favorited this city.'});
    } else {
      user.addLocations(location).then(() => {
        user.getLocations()
        .then(locations => {
          let addedLocation = locations.slice(-1)[0];
          let addCity = addedLocation.city[0].toUpperCase() + addedLocation.city.slice(1);
          let addState = addedLocation.state.toUpperCase();
          res.status(200).send({message: `${addCity}, ${addState} has been added to your favorites.`});
        })
      });
    }
  } else {
    res.status(401).send({message: `Invalid credentials.`});
  }
}

async function index(req, res) {
  let user = await User.findOne({where: {apiKey:req.body.apiKey}});
  
}

module.exports = {
  create: create,
  index: index
}
