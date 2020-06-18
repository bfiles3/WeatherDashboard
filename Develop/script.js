// setting the necessary variables to be acessible
var city = $("#cityInput").val();
var apiKey = "&appid=27a9193c38972da4788c6714b194066a";
var date = new Date();

// create a function to allow search button to return forecast
$("#searchBtn").on("click", function(){
  $("#fiveDay").addClass("block");
});

// return city from search and then clear search bar
city = $("#cityInput").val();
$("#cityInput").val("");

// get weather info from API and use that to run weather functions
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey; 
$.ajax({
  url: queryURL,
  method: "GET"
})
.then (function(info){
console.log(info.name)
console.log(info.main.humidity)
console.log(info.wind.speed)
console.log(info.weather[0].icon)
console.log(info.main.temp)
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
.then (function(uvIndex){
  console.log(uvIndex.current.uv)
});


// make function to append previous searches
function searchHistory(){
$(".searchHistory ul li").each(function(){
  var searched = $("<li>").addClass("searched").on("click",function(){
    $("#fiveDay").addClass("block");
  $(".list").append(searched);
  })})};


// use HTML classes to display weather information
function getWeather(){
  $(".title").text(info.name);
  $(".date").text(date);
  $(".temp").text((info.main.temp + 32));
  $(".humidity").text(info.main.humidity)
  $(".wind").text(info.wind.speed)
  $(".uv").text(uvIndex.current.uv)
  $(".icon").text(info.weather[0].icon)
};





