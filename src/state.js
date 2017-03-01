// import React from 'react';
// import FacebookLoginDisplay from './components/facebook_login_display';
// import PostsNew from './components/posts_new';
// import axios from 'axios';
//
// class State extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       name: null,
//       location: null
//     };
//
//     this.fetchLocation = this.fetchLocation.bind(this);
//     this.showPosition = this.showPosition.bind(this);
//     this.handleChangeLocation = this.handleChangeLocation.bind(this);
//   }
//
//   // componentDidMount() {
//   //   this.fetchLocation;
//   // }
//
//   componentDidMount() {
//     window.fbAsyncInit = function() {
//       FB.init({
//         appId      : '1317906064955234',
//         cookie     : true,  // enable cookies to allow the server to access
//                             // the session
//         xfbml      : true,  // parse social plugins on this page
//         version    : 'v2.8' // use version 2.8
//       });
//
//       FB.Event.subscribe('auth.statusChange', (response) => {
//         if (response.authResponse) {
//           FB.api('/me', (response) => {
//             this.setState({name: response.name});
//           });
//         } else {
//           this.setState({name: null});
//           console.log('User cancelled login or did not fully authorize.');
//         }
//       });
//
//       FB.getLoginStatus(function(response) {
//         this.statusChangeCallback(response);
//       }.bind(this));
//     }.bind(this);
//
//     // Load the SDK asynchronously
//     (function(d, s, id) {
//       var js, fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) return;
//       js = d.createElement(s); js.id = id;
//       js.src = "//connect.facebook.net/en_US/sdk.js";
//       fjs.parentNode.insertBefore(js, fjs);
//     }(document, 'script', 'facebook-jssdk'));
//   }
//
//   componentDidUpdate() {
//     if (this.state.name != null && this.state.location === null) {
//       this.fetchLocation();
//     }
//   }
//
//   statusChangeCallback(response) {
//     console.log('statusChangeCallback');
//     if (response.status === 'connected') {
//       // Logged into your app and Facebook.
//       this.testAPI();
//     }
//   }
//
//   testAPI() {
//     FB.api('/me', (response) => {
//       this.setState({name: response.name});
//     });
//   }
//
//   fetchLocation(event) {
//     // event.preventDefault();
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(this.showPosition);
//     }
//     else { console.log('FAIL')};
//   }
//
//   showPosition(position) {
//     axios.all([
//       axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&result_type=locality&key=AIzaSyAoTnjUzK8T87ZAXpbfsDXqz9Skh8UlSzY`),
//       axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&result_type=country&key=AIzaSyAoTnjUzK8T87ZAXpbfsDXqz9Skh8UlSzY`)
//     ])
//       .then(axios.spread((responseCity, responseCountry) => {
//         var city = responseCity.data.results[0].address_components[0].long_name;
//         var country = responseCountry.data.results[0].address_components[0].long_name;
//         var address = `${city}, ${country}`;
//         console.log(address);
//         this.setState({location: address});
//       }));
//   }
//
//   handleChangeLocation(event) {
//    this.setState({location: event.target.value});
//   }
//
//   render() {
//     if (this.state.name === null) {
//       return (
//         <div className="form-wrap">
//           <FacebookLoginDisplay />
//           <p>to send my love.</p>
//         </div>
//       );
//     }
//     else {
//       return(
//         <div className="form-wrap">
//           <FacebookLoginDisplay />
//           <PostsNew name={this.state.name} location={this.state.location} />
//         </div>
//       );
//     }
//   }
// }
//
// export default State;
