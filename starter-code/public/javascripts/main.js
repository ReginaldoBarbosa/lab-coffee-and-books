// create

const coffeBooksApi = axios.create({
  baseURL: "http://localhost:3000/api"
});

window.onload = () => {
  const ironhackBCN = {
    lat: 41.386230, 
    lng: 2.174980
  };
  
  const markers = [];
  
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: ironhackBCN
  });

  let center = {
    lat: undefined,
    lng: undefined
  }; 
};

function getPlaces() {
  coffeBooksApi.get()
    .then(response => {
      placeStores(response);
    })
    .catch(error => {
      console.log(error);
    })
}

function placeStores(places) {
  places.forEach((place) => {
    const center = {
      lat: place.location.coordinates[1],
      lng: place.location.coordinates[0]
    };
    const pin = new google.maps.Marker({
      position: center,
      map: map,
      title: place.name
    });
    markers.push(pin);
  });
}

getPlaces();


