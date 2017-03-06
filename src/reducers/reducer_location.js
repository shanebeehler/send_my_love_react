import { SHOW_POSITION } from '../actions/index';

export default function(state = ["unknown", "unknown", { lat: 999999999, lng: 999999999 }], action) {
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
    var object = action.payload.data.results;

    for(var key in object){
      if(object[3]){
        latlng = object[3].geometry.location;
        placeId = object[3].place_id;
      }
    };

    var location = [city, country, latlng, placeId];
    console.log(location);
    return location;
  default:
    return state;
  }
}
