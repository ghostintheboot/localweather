$(document).ready(function() {
  let lat;
  let long;

  // The 'dummy' sunlight icon.
  // If this isn't here, the Switch to Celsius/Fahrenheit will be pushed down upon page load.
  $(".weather-icon").html('<img src="http://openweathermap.org/img/w/01d.png">');

  // Get geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      let api = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=bb2b7ad82d3e658f25f44afaba107eae";
      // console.log(api);

      /* $.getJSON */
      $.getJSON(api, function(data) {
        // Variables for left side.
        let city = data.name;
        let weatherDesc = data.weather[0].description;
        let humidity = data.main.humidity;
        let windSpeed = ((data.wind.speed) * 2.237).toFixed(0);

        // Variables for right side.
        let weatherIcon = data.weather[0].icon;
        let kelvin = data.main.temp;
        let fahren = ( (kelvin) * (9/5) - 459.67 ).toFixed(1);
        let celsius = ( (kelvin) - 273.15 ).toFixed(1);
        let tempSwitch = true;

        // Call some JSON data.
        $(".city-data").html(city);
        $(".weather-desc").html(weatherDesc);
        $(".humidity-data").html(humidity + "%");
        $(".wind-data").html(windSpeed + " mph");

        $(".weather-number").html(fahren + " &#8457;");
        $(".temp-btn").click(function() {

          if (tempSwitch === true) {
            $(".weather-number").html(celsius + " &#8451;");
            tempSwitch = false;
          } else {
            $(".weather-number").html(fahren + " &#8457;");
            tempSwitch = true;
          }

        });

        // Add image icon based on icon data in JSON.
        // Clear sky.
        if (weatherIcon == "01d" || weatherIcon == "01n") {
          $(".weather-icon").html('<img src="http://openweathermap.org/img/w/01d.png">');
        }

        // Few clouds.
        else if (weatherIcon == "02d" || weatherIcon == "02n") {
          $(".weather-icon").html('<img src="http://openweathermap.org/img/w/02d.png">');
        }

        // Scattered clouds.
        else if (weatherIcon == "03d" || weatherIcon == "03n") {
          $(".weather-icon").html('<img src="http://openweathermap.org/img/w/03d.png">');
        }

        // Broken clouds.
        else if (weatherIcon == "04d" || weatherIcon == "04n") {
          $(".weather-icon").html('<img src="http://openweathermap.org/img/w/04d.png">');
        }

        // Shower rain.
        else if (weatherIcon == "09d" || weatherIcon == "09n") {
          $(".weather-icon").html('<img src="http://openweathermap.org/img/w/09d.png">');
        }

        // Rain.
        else if (weatherIcon == "10d" || weatherIcon == "10n") {
          $(".weather-icon").html('<img src="http://openweathermap.org/img/w/10d.png">');
        }

        // Thunderstorm.
        else if (weatherIcon == "11d" || weatherIcon == "11n") {
          $(".weather-icon").html('<img src="http://openweathermap.org/img/w/11d.png">');
        }

        // Snow.
        else if (weatherIcon == "13d" || weatherIcon == "13n") {
          $(".weather-icon").html('<img src="http://openweathermap.org/img/w/13d.png">');
        }

        // Mist.
        else if (weatherIcon == "50d" || weatherIcon == "50n") {
          $(".weather-icon").html('<img src="http://openweathermap.org/img/w/50d.png">');
        }

        // Nothin'...
        else {
          $(".weather-icon").html('');
        }

      }); // $.getJSON end.

      // Call lat and long data.
      $(".lat-data").html(position.coords.latitude);
      $(".lon-data").html(position.coords.longitude);

      // Cool fade-in effect.
      $(".fade").hide(0).fadeIn(1250);

    }); // navigator.geolocation.getCurrentPosition end.
  } // navigator.geolocation end.
});