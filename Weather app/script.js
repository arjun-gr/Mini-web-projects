const button = document.getElementById("btn");
const input = document.getElementById("city");
const city_name = document.querySelector(".city_name");
const weather_img = document.querySelector(".weather_img");
const weather_type = document.querySelector(".weather_type");
const temperature = document.querySelector(".temperature");
const dte = document.querySelector(".date");
const root = document.querySelector(".root");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const city = input.value;
  async function getData() {
    const apiID = "b3e9221d762f237e6eb2fabd4b8c0706";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiID}`;

    let data = await fetch(url);
    let dta = await data.json();

    // setting location name
    if (!dta.name) {
      city_name.innerHTML = "loading";
    } else {
      city_name.innerHTML = dta.name;
    }

    weather_type.innerHTML = dta.weather[0]["main"];
    temperature.innerHTML = `${Math.round(dta.main.temp)}°C`;

    // setting date
    let dateObje = new Date();
    let currDate = dateObje.getDate();
    let currMonth = dateObje.getMonth();
    let currYear = dateObje.getFullYear();

    dte.innerHTML = `${currDate}/${currMonth}/${currYear}`;

    // setting weather image
    if (dta.weather[0]["main"] == "Haze") {
      weather_img.setAttribute("src", "/images/haze.png");
    } else if (dta.weather[0]["main"] == "Clear") {
      weather_img.setAttribute("src", "/images/sun.png");
    } else if (dta.weather[0]["main"] == "Clouds") {
      weather_img.setAttribute("src", "/images/cloudy.png");
    } else if (dta.weather[0]["main"] == "Rain") {
      weather_img.setAttribute("src", "/images/rain.png");
    } else if (dta.weather[0]["main"] == "Drizzle") {
      weather_img.setAttribute("src", "/images/drizzle.png");
    }
  }
  if (city == "") {
    alert("Enter a valid city name");
  } else {
    getData();
    root.classList.add("active");
  }
});
