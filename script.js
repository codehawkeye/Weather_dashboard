$(document).ready(function () {
    $("#search-button").on("click", function () {
        var searchValue = $("#search-value").val();

        // clear input box
        $("#search-value").val("");

        searchWeather(searchValue);
    });

    $(".history").on("click", "li", function () {
        searchWeather($(this).text());
        
    });
    const card = $("<div>").addClass("card");
    const cardBody = $("<div>").addClass("card-body");
    const city = $("<h4>").addClass("card-title").text(response.name);
    const cityDate = $("<h4>").addClass("card-title").text(date.toLocaleDateString('en-US'));
    const temperature = $("<p>").addClass("card-text current-temp").text("Temperature: " + tempF + " °F");
    const humidity = $("<p>").addClass("card-text current-humidity").text("Humidity: " + response.main.humidity + "%");
    const wind = $("<p>").addClass("card-text current-wind").text("Wind Speed: " + response.wind.speed + " MPH");
    const image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png")

    function makeRow(text) {
        var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
        $(".history").append(li);
    }
    //  API KEY
    
    function searchWeather(searchValue) {
        $.ajax({
            type: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=d8ee69152dbab755edfa2a9697193380&units=imperial",
            dataType: "json",
            success: function (data) {
                console.log(data)
                var humidity = $('#humidity')
                humidity.text(data.main.humidity)
                // if (history.indexOf(searchValue) === -1) {
                //     history.pushState(searchValue);
                //     window.localStorage.setItem("history", JSON.stringify(history));
                // }
        
            }

        })
        
        // Function for 5 day forcast
        
        $.ajax({

            url: "http://api.openweathermap.org/data/2.5/forecast?q=" +searchValue +"&appid=d8ee69152dbab755edfa2a9697193380",
            type: "GET",
            dataType: "jsonp",
            success: function (data) {
                console.log(data);
                var filterdata = data.list.filter(function(forcast) {
                    console.log(forcast)
                    if (forcast.dt_txt.indexOf("12:00:00") !== -1) {
                        return forcast
                        
                    }
                                          
                })
                console.log(filterdata)



            }
            
        });
    }
    function createForecastCard(date, icon, temp, humidity) {

        // HTML elements we will create to later
        let fiveDayCardEl = $("<div>").attr("class", "five-day-card");
        let cardDate = $("<h3>").attr("class", "card-text");
        let cardIcon = $("<img>").attr("class", "weatherIcon");
        let cardTemp = $("<p>").attr("class", "card-text");
        let cardHumidity = $("<p>").attr("class", "card-text");
    
        cardRow.append(fiveDayCardEl);
        cardDate.text(date);
        cardIcon.attr("src", icon);
        cardTemp.text(`Temp: ${temp} °F`);
        cardHumidity.text(`Humidity: ${humidity}%`);
        fiveDayCardEl.append(cardDate, cardIcon, cardTemp, cardHumidity);
    }    

})





    
