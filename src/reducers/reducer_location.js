import { SHOW_POSITION } from '../actions/index';

export default function(state = "Location", action) {
  switch(action.type) {
  case SHOW_POSITION:
    var city = "unknown";
    var country = "unknown";

    action.payload.data.results[0].address_components.forEach(function(object){
      for(var key in object) {
        if(object[key][0] === "locality") {
          city = (object["long_name"]);
        };
      };
    });

    action.payload.data.results[0].address_components.forEach(function(object){
      for(var key in object) {
        if(object[key][0] === "country") {
          country = (object["long_name"]);
        };
      };
    });
    var latlng = action.payload.data.results[0].geometry.location;
    var placeId = action.payload.data.results[0].place_id;
    var location = [city, country, latlng, placeId];
    console.log(location);
    return location;
  default:
    return state;
  }
}

// .then(axios.spread((responseCity, responseCountry) => {
//   var city = responseCity.data.results[0].address_components[0].long_name;
//   var country = responseCountry.data.results[0].address_components[0].long_name;
//   var address = `${city}, ${country}`;
//   console.log(address);
//   this.setState({location: address});
// }));
