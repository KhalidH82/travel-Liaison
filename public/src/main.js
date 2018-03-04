    function initMap() {
        // Create a map object and specify the DOM element for display.
        let map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }

function activatePlacesSearch(){
  let input = document.getElementById('search_term');
  let autocomplete = new google.maps.places.Autocomplete(input);
};

