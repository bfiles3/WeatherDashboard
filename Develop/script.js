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
$("#cityInput").val("");

// get weather info from API and use that to run weather functions
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;
$.ajax({
  url: queryURL,
  method: "GET"
})
  .then(function (info) {
    console.log(info.list.name)
    console.log(info.list.main.humidity)
    console.log(info.list.wind.speed)
    console.log(info.list.weather[0].icon)
    console.log(info.list.main.temp)
    getWeather();
    getFiveDay();
    searchHistory();
  });

// create function to get UV Data
var queryURl = "https://api.openweathermap.org/data/2.5/onecall?" + city + apiKey;
$.ajax({
  url: queryURL,
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


// make function to append previous searches
function searchHistory() {
  $(".searchHistory ul li").each(function () {
    var searched = $("<li>").addClass("searched").on("click", function () {
      $("#fiveDay").addClass("block");
      $(".list").append(searched);
    })
  })
};


// use HTML classes to create variables to display weather information and add it to page
function getWeather() {
  var title = $(".title").text(info.list.name);
  var dated = $(".date").text(date);
  var temp = $(".temp").text((info.list.main.temp + 32));
  var humidity = $(".humidity").text(info.list.main.humidity)
  var wind = $(".wind").text(info.list.wind.speed)
  var uv = $(".uv").text(uvIndex.current.uv)
  var icon = $(".icon").text(info.list.weather[0].icon)

  title.append(dated, icon)
  $("#mainb").append(temp, humidity, wind, uv)
};

// get weather for five day forecast
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey;
$.ajax({
  url: queryURL,
  method: "GET"
})
  .then(function (info5) {
    console.log(info5.name)
    console.log(info5.forecast.humidity)
    console.log(info5.forecast.wind.speed)
    console.log(info5.weather[0].icon)
    console.log(info5.forecast.temp.value)
    getFiveDay();
    searchHistory();
  });

function getFiveDay(){
  var fiveTemp = $(".tempf").text((info.forecast.temperature.value + 32));
  
$("#mainf").append(fiveTemp, image)

};




