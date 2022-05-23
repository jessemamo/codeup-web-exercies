// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_APPID,
//     q:     "San Antonio, US"
// }).done(function(data) {
//     console.log(data);
// });
$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: OPEN_WEATHER_APPID,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
    console.log('The entire response:', data);
    console.log('Diving in - here is current information: ', data.current);
    $("#current-weather").append("<p>" + data.current.temp + "</p>")
    console.log('A step further - information for tomorrow: ', data.daily[1]);
});
data.daily.forEach(function(dailyForecast, index){
    if (index < 5){
        console.log(dailyForecast.temp.max);
        console.log(dailyForecast.humidity);
        $("#forcast").append("<p>" + new Date(dailyForecast.dt*1000) + "</p>")
        $("#forcast").append("<p>" + dailyForecast.temp.max + "</p>")
        $("#forcast").append("<p> + Humidity:" + dailyForecast.humidty + "</p>")

    }
    let current_datatime = new Data()
    console.log(current_datatime.toString())

});