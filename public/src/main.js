$(()=> {

  $('button').on("click", 
  function produceSearch(term) {
    var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316)
     let map_inst = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

  var request = {
    location: pyrmont,
    radius: '500',
    query: 'restaurant',
    key: 'AIzaSyDD-DAAMzpneF3Oz_uoCuuiXNYGyng6Vh8'
  };

  let service = new google.maps.places.PlacesService(map_inst);
  service.textSearch(request, callback);
  })

  function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}

 

})

