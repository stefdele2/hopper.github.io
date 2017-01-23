var map;
$.getJSON("https://datatank.stad.gent/4/mobiliteit/taxilocaties.geojson", function (data) {
function initMap() {

  // startpositie
  var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(51.04219,3.70376)
  };

  // map maken
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


    // door json
  for(var i = 0; i < data.coordinates.length; i++) {
    //pinnekes maken
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(data.coordinates[i][1],data.coordinates[i][0]),
      map: map
    });
  }
}
$(document).ready(function(){
  initMap();
});

});
