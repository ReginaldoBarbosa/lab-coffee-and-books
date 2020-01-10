// create

const coffeBooksApi = axios.create({
  baseURL: 'http://localhost:3000/api',
});

window.onload = () => {
  getPlaces();
};

function getPlaces() {
  coffeBooksApi.get()
    .then(response => {
      placeStores(response.data);
    })
    .catch(error => {
      console.log(error);
    })
}

function placeStores(places) {
  const saoPaulo = {
    lat: -23.6345838,
    lng: -46.7227298
  };

  const markers = [];

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: saoPaulo
  });

  places.forEach((place) => {
    const center = {
      lat: place.location.coordinates[1],
      lng: place.location.coordinates[0]
    };
    const pin = new google.maps.Marker({
      position: center,
      map: map,
      title: place.name,
    });
    markers.push(pin);
  });
}

// getPlaces();


