let map;

async function initMap() {
  // The location of User.
  const position = { lat: 6.89226751663626, lng: 3.7181666524137893 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Users position.
  map = new Map(document.getElementById("map"), {
    zoom: 12,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Users location 
  const marker = new google.maps.Marker({
    position: position,
    map: map,
    title: "User",
  });
}

initMap();

