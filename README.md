# WeatherDashboard
[Weather Dashboard](https://bfiles3.github.io/WeatherDashboard/)
![](/assets/screenshot.png)

In order to create a Weather Dashboard it was necessary to register an API key and use the ajax function to get information from the website to show data on weather. The first task was to outline the HTML to reflect the different areas where I would append information from the JavaScript file. I made empty containers for every place that I would need information to show on the webpage. I operated with a placeholder city to code most of the HTML and make sure all of my functions worked correctly, before I added in the ajax function to get weather information for any city that could be searched for.

The first step taken on the JavaScript was to set variables for the value of the city input from the search bar, and an acessible variable of the apiKey. I also used the JavaScript function to get the current date, and set a variable to that. Following that, I created a function that allowed the search button to function, and that allowed the five day forecast to show upon clicking the button. I then created a function to append any search queries to the unordered list under the search bar, which I called search history.

After I fetched the weather information using ajax, I console logged all of the information that I would need to append to the HTML to show on the page. Following that, I used a different link with ajax to get the UV index, because that was not included in the original weather that I retrieved. I then console logged the UV index value and set a CSS value to color the padding of the text of that value. 

When the current weather forecast was linked and logged, I then used jQuery to call each class and add the respective content to each one. After I connected all of those dots, I appended them to the HTML in the order that I wanted them to display. In order to do the same for the five day forecast, I again used ajax to call upon a different link for the forecast, and then just followed all the aforementioned steps related to current weather, to the five day forecast.
