// variables from HTML 
var city = $("#cityInput").val();
var search = $("#searchBtn");
var searchHistory = $("#searchHistory");
var apiKey = "&appid=341a5ba6d1e80abcab308215c512cc88"
// var date = $datepicker({dateFormat:"mm/dd/yy"}).datepicker("setDate",new Date());
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey;

// get the value of the city on click of the search button
$("#cityInput").on("click",(function(event) { 
	
	if (event.keyCode === 13) { 
		event.preventDefault();
		$("#searchBtn").click(); 
	} 
}));

$("#searchBtn").on("click", function() {
 $('#fiveDay').addClass(".block")
  $("#cityInput").val();
  $("#cityInput").val("");

  $.ajax({
    url: queryUrl,
    method: "GET"
  })
  .then(function (response){

    console.log(response);

    console.log(response.name); 

  })}) 
