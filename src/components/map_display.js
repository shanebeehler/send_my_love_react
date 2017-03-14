import React from 'react';

class MapDisplay extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.props.profile = this.props.profile.bind(this);
  // }

  componentDidMount() {
    if (this.props.profile !== "logged out") {
      var current_love = this.props.profile.current_love;
      console.log(current_love[0].lat);

      this.map = new google.maps.Map(this.refs.map, {
        zoom: 3,
        center: {lat: current_love[1].lat, lng: current_love[1].lng},
        mapTypeId: 'roadmap',
        scrollwheel: false
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

      var infowindow2 = null;
      var marker2 = null;      

      if (current_love[2]) {
        var currentLoveLat2 = current_love[2].lat
        var currentLoveLng2 = current_love[2].lng
        var currentLove2 = { lat: currentLoveLat2, lng: currentLoveLng2 }

        coordinates = [
          currentLove0,
          currentLove1,
          currentLove2
        ];

        infowindow2 = new google.maps.InfoWindow({
          content: `${current_love[2].name} in ${current_love[2].city}, ${current_love[2].country}`,
        });

        marker2 = new google.maps.Marker({
          position: coordinates[2],
          map: this.map,
        });

        marker2.addListener('mouseover', function() {
          infowindow2.open(this.map, marker2);
        });

      }

      var infowindow0 = new google.maps.InfoWindow({
        content: `${current_love[0].name} in ${current_love[0].city}, ${current_love[0].country}`,
      });

      var infowindow1 = new google.maps.InfoWindow({
        content: `You in ${current_love[1].city}, ${current_love[1].country}`,
      });

      var marker0 = new google.maps.Marker({
        position: coordinates[0],
        map: this.map,
      });

      var marker1 = new google.maps.Marker({
        position: coordinates[1],
        map: this.map,
      });

      marker0.addListener('mouseover', function() {
        infowindow0.open(this.map, marker0);
      });

      marker1.addListener('mouseover', function() {
        infowindow1.open(this.map, marker1);
      });

      var heartSymbol = { path: 'M32.256-4.535q-.936 0-1.584-.648l-22.464-21.672q-.36-.288-.99-.936t-1.998-2.358-2.448-3.51-1.926-4.356-.846-4.968q0-7.92 4.572-12.384t12.636-4.464q2.232 0 4.554.774t4.32 2.088 3.438 2.466 2.736 2.448q1.296-1.296 2.736-2.448t3.438-2.466 4.32-2.088 4.554-.774q8.064 0 12.636 4.464t4.572 12.384q0 7.956-8.244 16.2l-22.428 21.6q-.648.648-1.584.648z',
                          strokeColor: '#EF5C48',
                          fillColor: '#EF5C48',
                          fillOpacity: 1,
                          scale: .3
      };

      var flightPath = new google.maps.Polyline({
        path: coordinates,
        icons: [{
          icon: heartSymbol,
          offset: '0%'
        }],
        geodesic: false,
        strokeColor: '#EF5C48',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });

      animateHeart(flightPath);

      var bounds = new google.maps.LatLngBounds();
      for (var i = 0; i < coordinates.length; i++) {
        bounds.extend(coordinates[i]);
      }
      this.map.fitBounds(bounds);
      flightPath.setMap(this.map);

      function animateHeart(line) {
        var count = 0;
        window.setInterval(function() {
          count = (count + 1) % 200;

          var icons = line.get('icons');
          icons[0].offset = (count / 2) + '%';
          line.set('icons', icons);
        }, 30);
      }
    }
  }

  render() {
    const mapStyle = {
      width: '100%',
      height: "50vh",
      border: '1px solid black'
    };

    return (
      <div className="map" ref="map" style={mapStyle}>I should be a map!</div>
    );
  }
}

export default MapDisplay;
