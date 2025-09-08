const box = document.getElementById("boxshow");
setTimeout(() => {
    box.classList.add("show");
}, 100);

const ApiKey = "8a752047f1aaf53348ba8482ca2ca1f9"
const btn = document.getElementById("btn_show")
const result = document.querySelector(".getresult")



btn.onclick = async () => {
    const city = document.getElementById("InputCity").value;
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`)

        const data = await res.json()
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        result.innerHTML = `
        <div class ="weather_column">
        <h2>Weather in ${data.name}</h2>
        <h3>temperatura: ${data.main.temp}°C</h3>
        <h3>humidity: ${data.main.humidity}°C</h3>
        <h3>state: ${data.weather[0].description}</h3>
        </div>
        <img src="${iconUrl}" alt="weather icon">
`;


    }
    catch {
        console.log("error")
    }

}




