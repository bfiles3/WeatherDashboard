// setting the necessary variables to be acessible
var city = $("#cityInput").val();
var apiKey = "&appid=27a9193c38972da4788c6714b194066a";
var date = new Date();

// create a function to allow search button to return forecast
$("#searchBtn").on("click", function(){
  $("#fiveDay").addClass(".block");
});

// return city from search and then clear search bar
city = $("#cityInput").val();
$("#cityInput").val("");

// get weather info from API
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey; 
$.ajax({
  url: queryURL,
  method: "GET"
})

// make function to append previous searches
$(".searchHistory ul li").each(function(){
  var searched = $("<li>")
}