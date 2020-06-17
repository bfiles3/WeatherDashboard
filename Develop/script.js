// variables from HTML 
var city = $("#cityInput").val();
var search = $("#searchBtn");
var searchHistory = $("#searchHistory");
// var date = $datepicker({dateFormat:"mm/dd/yy"}).datepicker("setDate",new Date());
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=341a5ba6d1e80abcab308215c512cc88";

// get the value of the city on click of the search button
search.on("click", function() {
    console.log(city);
}); 

// get weather information
$.ajax({
    url: queryURL, 
    method: "GET"
})
.then (function(response){
    console.log(response);
})


