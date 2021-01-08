$(document).ready(function() {
    $("#search-button").on("click", function() {
        var searchValue = $("#search-value").val();

        // clear input box
        $("#search-value").val("");

        searchWeather(searchValue);
    });

$(".history").on("click", "li", function() {
    searchWeather($(this).text());
});

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
            if (history.indexOf(searchValue) === -1) {
                history.pushState(searchValue);
                window.localStorage.setItem("history", JSON.stringify(history));
            }
         
        }
        
        // create history link for this search
          
    })}
    


})






