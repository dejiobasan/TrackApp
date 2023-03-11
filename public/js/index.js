
// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com

mapboxgl.accessToken = config.ACCESS_KEY;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: config.STYLE_URL, // style URL
    center: [3.4859119998962513, 6.641031492866564], // starting position [lng, lat]
    zoom: 9, // starting zoom
});