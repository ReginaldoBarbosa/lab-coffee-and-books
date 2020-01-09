// function getPlaces() {
//   axios.get("/api")
//     .then(response => {
//       placeRestaurants(response.data.restaurants);
//     })
//     .catch(error => {
//       console.log(error);
//     })
// }

// function placeRestaurants(restaurants) {
//   restaurants.forEach(function (restaurant) {
//     const center = {
//       lat: restaurant.location.coordinates[1],
//       lng: restaurant.location.coordinates[0]
//     };
//     const pin = new google.maps.Marker({
//       position: center,
//       map: map,
//       title: restaurant.name
//     });
//     markers.push(pin);
//   });
// }

// getRestaurants();