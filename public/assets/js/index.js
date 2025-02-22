// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const latitude = JSON.parse({{ farm.latitude | tojson }})
  const longitude = JSON.parse({{ farm.longitude | tojson }})
  console.log(latitude)
  const position = { lat: latitude, lng: longitude };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "{{ farm.owner.farmer_ID }}",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "{{ farm.location }}",
  });
}

initMap();