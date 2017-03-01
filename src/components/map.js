import React, { Component } from 'react';
import { config } from '../../config.js';
import axios from 'axios';

const API_KEY  = config.geocode_api_key;

const Maps = ({profile}) => {

  if(profile != null) {
    var current_love = profile.current_love;
    var city = current_love[0].city;
    var country = current_love[0].country;
    var lat = current_love[0].lat;
    var lng = current_love[0].lng;
    var latlng = lat + ',' + lng;
    var place = city + ',' + country;
    var address = `https://www.google.com/maps/api/place/photo?maxwidth=200&photoreference=ChIJIQBpAG2ahYAR_6128GcTUEo&key=${API_KEY}`;

    return (
      <div>
        {address}
      </div>
    );
  }
  else {
    return null;
  }
}

export default Maps;
