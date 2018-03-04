$(()=>{
  console.log('script loaded')

  $('#buttonSearch').click(()=>{
    let location = $("#search_term").val()
    $.ajax({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+ location + '&key=AIzaSyDD-DAAMzpneF3Oz_uoCuuiXNYGyng6Vh8',
      method: 'GET',
      success: (data)=>{
        testLL = data.results[0].geometry.location;
        console.log(testLL.lat)

        //sendToDB(pokemon)
      }

    })
    $('main').append("<div id=map></div>")
  })
})




