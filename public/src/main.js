

function initMap() {
  let home = new google.maps.LatLng(40.747738, -74.040396);

  map = new google.maps.Map(document.getElementById('map'), {
      center: home,
      zoom: 15
    });

  let request = {
    location: home,
    radius: '500',
    query: 'restaurant'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (let i = 0; i < results.length; i++) {
      let place = results[i];
     createMarker(place);
      console.log(place);
    }
  }
}

function createMarker(place) {

  let contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">'+ place.name + '</h1>'+
      '<div id="bodyContent">'+
      '<p>Address:' + place.formatted_address +
      '<p><b>Rating:</b>'+ place.rating + '</p>'+
      '</div>'+
      '</div>';

  let infowindow = new google.maps.InfoWindow({
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