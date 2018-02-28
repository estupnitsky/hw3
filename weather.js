let updateWidget = function(data) {

  console.log("Got weather data: ", data)
  // YOUR CODE GOES HERE
  let currentLocation = data.name
  let currentTemp = Math.round(data.main.temp)
  jQuery(".card-title").html(currentLocation)
  jQuery(".card-img-top").attr("src","http://openweathermap.org/img/w/"+data.weather[0].icon+".png")
  jQuery(".card-text").html("It's currently "+currentTemp+" degrees outside.")
  // HINT:
  // Weather icons are provided for you. Sample URL: http://openweathermap.org/img/w/01d.png
  // The very last part ('01d.png') should be obtained from the weather information.

}

let getParisTemp = function(event) {
  let latitude = '48.8566';
  let longitude = '2.3522';
  let apiKey = '478583753475234c655f0057cb9a1bde';
  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
}

//Provides Paris weather after clicking Get Current Temperature
jQuery("#get_forecast").on("click",getParisTemp)

let handlePosition = function(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getParisTemp);
}

let link = jQuery("#get_forecast")
link.on("click", handlePosition);


////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
