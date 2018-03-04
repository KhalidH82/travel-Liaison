
 /*   function initMap() {
        // Create a map object and specify the DOM element for display.
        let map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.745497, lng: -73.989344},
          zoom: 8
        });
      }

function activatePlacesSearch(){
  let input = document.getElementById('search_term');
  let autocomplete = new google.maps.places.Autocomplete(input);
};*/

function initMap() {
  var home = new google.maps.LatLng(40.747738, -74.040396);

  map = new google.maps.Map(document.getElementById('map'), {
      center: home,
      zoom: 15
    });

  var request = {
    location: home,
    radius: '500',
    query: 'restaurant'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
     createMarker(place);
      console.log(place);
    }
  }
}

function createMarker(place) {

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">'+ place.name + '</h1>'+
      '<div id="bodyContent">'+
      '<p>Address:' + place.formatted_address +
      '<p><b>Rating:</b>'+ place.rating + '</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

    let placename = place.name
    let myLatLng = new google.maps.LatLng({lat: place.geometry.viewport.f.b, lng: place.geometry.viewport.b.b}); 
    let marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: placename
  });

      marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

}