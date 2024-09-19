const KEY = "44698139a4c481d17cb6dbc1fc43ae58";
$("#search").click(() => {
    const city = $("#city").val();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);

            $('#flag').html(`<img src="https://flagsapi.com/${data.sys.country}/flat/64.png"></img>`);
            $(".weatherResult").css("display", "flex");
            $('.inputContainer').css("width", "500px");
            $('.inputContainer').css("height", "500px");
            console.log(data);
            $("#posCity").text(data.name);
            $("#temperature").text((data.main.temp - 273).toFixed(2));
            $("#weather").text(data.weather[0].main);
            $("#winddeg").css("display", "flex");
            $("#winddeg").css("transform", `rotate(${data.wind.deg}deg)`);
            if (parseInt((data.main.temp - 273).toFixed(2)) < 10) {
                $(".wrap").css("background", "rgb(47,92,203)");
                $(".wrap").css("background", "linear-gradient(90deg, rgba(47,92,203,1) 15%, rgba(29,158,253,1) 45%, rgba(29,177,253,1) 79%)");
            } else if (parseInt((data.main.temp - 273).toFixed(2)) > 10) {
                $(".wrap").css("background", "rgb(217,51,51)");
                $(".wrap").css("background", "linear-gradient(90deg, rgba(217,51,51,1) 27%, rgba(230,85,85,1) 55%, rgba(158,43,43,1) 100%)");
            }
        })
})



