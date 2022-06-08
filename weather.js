const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiParam = "&appid=4dd873919f3753787a3617812cb65257";

// https://api.openweathermap.org/data/2.5/weather?q=boksburg&appid=4dd873919f3753787a3617812cb65257

function getData(city) {
    let url = `${baseUrl}${city}${apiParam}`;
    let mainContainerElement = document.getElementById('mainContainerID');

    // Fetch data from Open Weather Map Website
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            mainContainerElement.innerHTML = `
            <p class="cityName">${data.name}</p>
            <p class="bigFontSize">${data.main.temp}<span>&#176;</span></p>
            <p class="midFontSize">${data.weather[0].description}</p>
            <p class="midFontSize">
                <span>H:${data.main.temp_max}<span>&#176;</span></span>
                <span>L:${data.main.temp_min}<span>&#176;</span></span>
            </p>
            `
        })
        .catch(err => console.log(err));
}
