// setting the necessary variables to be acessible
var city = $("#cityInput").val();
var apiKey = "&appid=341a5ba6d1e80abcab308215c512cc88";
var date = new Date();

// create a function to allow search button to return forecast
$("#searchBtn").on("click", function () {
  $("#fiveDay").addClass("block");
});

// return city from search and then clear search bar
city = $("#cityInput").val();
//$("#cityInput").val("");

// make function to append previous searches
function searchHistory() {
  $(".searchHistory ul li").each(function () {
    var searched = $("<li>").addClass("searched").on("click", function () {
      $("#fiveDay").addClass("block");
      $(".list").append(searched);
    })
  })
};

// get weather info from API and use that to run weather functions

var queryUrl = "https://www.api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;
$.ajax({
  url: queryUrl,
  method: "GET"
})
  .then(function (response) {
    console.log(response.list.name)
    console.log(response.list.main.humidity)
    console.log(response.list.wind.speed)
    console.log(response.list.weather[0].icon)
    console.log(response.list.main.temp)
    getWeather();
    getFiveDay();
    searchHistory();
  });



// create function to get UV Data
var queryUrl = "https://api.openweathermap.org/data/2.5/onecall?" + city + apiKey;
$.ajax({
  url: queryUrl,
  method: "GET"
})
  .then(function (uvIndex) {
    console.log(uvIndex.current.uv)
    var uvNum = uv.Index.current.uv
    if (uvNum <= 5){
      uv.addClass("green")
    }
    else if (uvNum > 5){
      uv.addClass("red")
    }
  });

// use HTML classes to create variables to display weather information and add it to page
function getWeather() {

  var title = $(".title").text(response.list.name);
  var dated = $(".date").text(date);
  var temp = $(".temp").text((response.list.main.temp + 32));
  var humidity = $(".humidity").text(response.list.main.humidity)
  var wind = $(".wind").text(response.list.wind.speed)
  var uv = $(".uv").text(uvIndex.current.uv)
  var icon = $(".icon").text(response.list.weather[0].icon)

  title.append(dated, icon)
  $("#mainb").append(temp, humidity, wind, uv)
};

// get weather for five day forecast
var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid" + apiKey;
$.ajax({
  url: queryUrl,
  method: "GET"
})
  .then(function (response) {
    console.log(response.name)
    console.log(response.forecast.humidity)
    console.log(response.forecast.wind.speed)
    console.log(response.weather[0].icon)
    console.log(response.forecast.temp.value)
    getFiveDay();
    searchHistory();
  });

function getFiveDay(){
  var fiveTemp = $(".tempf").text((response.forecast.temperature.value + 32));
  
$("#mainf").append(fiveTemp, image)

};




