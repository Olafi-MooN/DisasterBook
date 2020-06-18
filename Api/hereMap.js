var nomeFormatado = localStorage.usuario.charAt(0).toUpperCase() + localStorage.usuario.slice(1);
var mudarNomeUser = document.querySelector('#userP');
mudarNomeUser.innerText = nomeFormatado;

function moveMapToBeloHorizonte(map) {
    map.setCenter({ lat: -19.8157, lng: -43.9542 });
    map.setZoom(10);
}



function addDraggableMarker(map, behavior){
    var marker = new H.map.Marker({lat:-19.8157, lng:-43.9542}, {
      // mark the object as volatile for the smooth dragging
      volatility: true
    });
    // Ensure that the marker can receive drag events
    marker.draggable = true;
    map.addObject(marker);
  
    // disable the default draggability of the underlying map
    // and calculate the offset between mouse and target's position
    // when starting to drag a marker object:
    map.addEventListener('dragstart', function(ev) {
      var target = ev.target,
          pointer = ev.currentPointer;
      if (target instanceof H.map.Marker) {
        var targetPosition = map.geoToScreen(target.getGeometry());
        target['offset'] = new H.math.Point(pointer.viewportX - targetPosition.x, pointer.viewportY - targetPosition.y);
        behavior.disable();
      }
    }, false);
  
  
    // re-enable the default draggability of the underlying map
    // when dragging has completed
    map.addEventListener('dragend', function(ev) {
      var target = ev.target;
      if (target instanceof H.map.Marker) {
        behavior.enable();
      }
    }, false);
  
    // Listen to the drag event and move the position of the marker
    // as necessary
     map.addEventListener('drag', function(ev) {
      var target = ev.target,
          pointer = ev.currentPointer;
      if (target instanceof H.map.Marker) {
        target.setGeometry(map.screenToGeo(pointer.viewportX - target['offset'].x, pointer.viewportY - target['offset'].y));
      }
    }, false);
  }
  

/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
    'apikey': 'JEQLMrKsDwYS5fweI_gtUeojyL2R6-0_y3PbDKeqldc'
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map, {
    center: { lat: 50, lng: 5 },

    pixelRatio: window.devicePixelRatio || 1
});


var service = platform.getSearchService();

// Call the geocode method with the geocoding parameters,
// the callback and an error callback function (called if a
// communication error occurs):
let btnEnviarDados = document.querySelector('.btnEnviarDados');
btnEnviarDados.addEventListener('click', () => {

    let pais = document.querySelector('#pais').value;
    let estado = document.querySelector("#estado").value;
    let municipio = document.querySelector("#municipio").value;
    let bairro = document.querySelector("#bairro").value;
    let rua = document.querySelector("#rua").value;
    let local = `${pais},${estado},${municipio},${bairro},${rua}`
    service.geocode({
        q: local
      }, (result) => {
        // Add a marker for each location found
        result.items.forEach((item) => {
          map.addObject(new H.map.Marker(item.position));
        });
      }, alert);
})


// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
window.onload = function () {
    moveMapToBeloHorizonte(map);
    addDraggableMarker(map, behavior);
}
