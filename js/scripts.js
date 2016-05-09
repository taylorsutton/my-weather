// My Scripts

// Simple Weather javascript

$(function() {
  $.simpleWeather({
    location: 'Spokane, MA',
    
    unit: 'f',
    
    success: function(weather) {
        $('.city').text(weather.city);
        $('.temp').text(weather.temp);
        $('.cond-code').text(weather.code);
        console.log(weather);
        
        
      },

    error: function(error) {
      console.log("ERROR NO WEATHER!");
    }
  });
});

// -----------------------