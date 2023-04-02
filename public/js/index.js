
// // TO MAKE THE MAP APPEAR YOU MUST
// // ADD YOUR ACCESS TOKEN FROM
// // https://account.mapbox.com

// mapboxgl.accessToken = config.ACCESS_KEY;

// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: config.STYLE_URL, // style URL
//     center: [3.4859119998962513, 6.641031492866564], // starting position [lng, lat]
//     zoom: 9, // starting zoom
// });
// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 6.8047242, lng: 3.1048864 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 12,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: position,
    map: map,
    title: "User",
  });
}

initMap();

