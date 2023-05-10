let map;

fetch("/data")
  .then(response => response.json())
  .then(data => {
    async function initMap() {
      // The location of User.
      const position = { lat: data.lat, lng: data.lng };
      // Request needed libraries.
      //@ts-ignore
      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerView } = await google.maps.importLibrary("marker");
    
      // The map, centered at Users position.
      map = new Map(document.getElementById("map"), {
        zoom: 20,
        center: position,
        mapId: "DEMO_MAP_ID",
      });
    
      // The marker, positioned at Users location 
      const marker = new google.maps.Marker({
        position: position,
        map: map,
        title: "User",
      });
    };
    initMap();
  });





