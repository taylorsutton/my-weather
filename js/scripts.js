// First, load jQuery (required)
// jQuery 2.2.2 loaded via `index.html`

// Second, load Semantic UI JS (required)
// @codekit-prepend "semantic.js";

// Third, Add to Homescreen (optional)
// @codekit-prepend "add-to-homescreen.js";

// Third, load any plugins (optional)
// @codekit-prepend "plugins.js";

// My Scripts



//Activate Tabs
$('.menu .item').tab()
;

//Get Cheney Weather
// Note: Plugin has been updated. Use version 3.1
// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// Refer: http://simpleweatherjs.com

$.simpleWeather({
    location: '99004',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('#cheney .city').text(weather.temp);
      $('#cheney .temp').text(weather.city);
      $('#cheney i').addClass( 'icon-' + weather.code );
    
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });


