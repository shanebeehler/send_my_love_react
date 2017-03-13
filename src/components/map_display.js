import React from 'react';

class MapDisplay extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.props.profile = this.props.profile.bind(this);
  // }

  componentDidUpdate() {
    if (this.props.profile !== "logged out") {
      var current_love = this.props.profile.current_love;
      console.log(current_love[0].lat);

      this.map = new google.maps.Map(this.refs.map, {
        zoom: 3,
        center: {lat: current_love[1].lat, lng: current_love[1].lng},
        mapTypeId: 'roadmap'
      });

      var currentLoveLat0 = current_love[0].lat
      var currentLoveLng0 = current_love[0].lng
      var currentLoveLat1 = current_love[1].lat
      var currentLoveLng1 = current_love[1].lng

      var currentLove0 = { lat: currentLoveLat0, lng: currentLoveLng0 }
      var currentLove1 = { lat: currentLoveLat1, lng: currentLoveLng1 }

      var coordinates = [
        currentLove0,
        currentLove1,
      ];

      if (current_love[2]) {
        var currentLoveLat2 = current_love[2].lat
        var currentLoveLng2 = current_love[2].lng
        var currentLove2 = { lat: currentLoveLat2, lng: currentLoveLng2 }

        coordinates = [
          currentLove0,
          currentLove1,
          currentLove2
        ];
      }

      var flightPath = new google.maps.Polyline({
        path: coordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });

      var bounds = new google.maps.LatLngBounds();
      for (var i = 0; i < coordinates.length; i++) {
        bounds.extend(coordinates[i]);
      }
      this.map.fitBounds(bounds);
      flightPath.setMap(this.map);
    }
  }

  render() {
    const mapStyle = {
      width: '85%',
      height: 500,
      border: '1px solid black'
    };

    return (
      <div className="map" ref="map" style={mapStyle}>I should be a map!</div>
    );
  }
}

export default MapDisplay;
