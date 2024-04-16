export function getWeather() {
  async function getWeatherData() {
    const res = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=504a500ac990468290572844230805&q=Viborg&days=3&aqi=no&alerts=no`
    );
    const data = await res.json();
    console.log(data);
    showWeatherData(data);
  }

  getWeatherData();

  function showWeatherData(data) {
    const locationEl = document.querySelector("#location");
    const tempHEl = document.querySelector("#tempH");
    const tempLEl = document.querySelector("#tempL");
    const city = data.location.name || "Unknown location";
    const { maxtemp_c: tempMax = "N/A", mintemp_c: tempMin = "N/A" } =
      data.forecast.forecastday[0]?.day || {};

    // Next Days Temp Data
    const [day2, day3] = document.querySelectorAll(".day");
    const [day2HEl, day3HEl] = document.querySelectorAll(".tempH");
    const [day2LEl, day3LEl] = document.querySelectorAll(".tempL");

    const [
      day2Data = { max: "N/A", min: "N/A" },
      day3Data = { max: "N/A", min: "N/A" },
    ] = data.forecast.forecastday
      .slice(1)
      .map(
        ({ day: { maxtemp_c: max = "N/A", mintemp_c: min = "N/A" } = {} }) => ({
          max,
          min,
        })
      );

    // Current temp and city
    locationEl.textContent = city;
    tempHEl.textContent = `H: ${tempMax} °C`;
    tempLEl.textContent = `L: ${tempMin} °C`;

    [day2HEl, day3HEl].forEach((el, index) => {
      const { max } = index === 0 ? day2Data : day3Data;
      el.textContent = `H: ${max} °C `;
    });

    [day2LEl, day3LEl].forEach((el, index) => {
      const { min } = index === 0 ? day2Data : day3Data;
      el.textContent = `L: ${min} °C `;
    });

    //Date Numbers for next days - 15/7 etc
    const today = new Date();
    const tomorrow = new Date(today);
    const dayAfterTomorrow = new Date(today);

    tomorrow.setDate(today.getDate() + 1);
    dayAfterTomorrow.setDate(today.getDate() + 2);

    day2.textContent = `${tomorrow.getDate()}/${tomorrow.getMonth() + 1}`;
    day3.textContent = `${dayAfterTomorrow.getDate()}/${
      dayAfterTomorrow.getMonth() + 1
    }`;

    // Weather Icons
    const iconEls = document.querySelectorAll(".icon");

    const icons = {
      Sunny: "sun.png",
      Clouds: "cloud-computing.png",
      "Partly cloudy": "cloud-computing.png",
      Cloudy: "cloud-computing.png",
      Overcast: "cloud-computing.png",
      Fog: "cloud-computing.png",
      "Freezing fog": "cloud-computing.png",
      "Blowing snow": "snow.png",
      Blizzard: "snow.png",
      "Patchy snow possible": "snow.png",
      "Patchy sleet possible": "snow.png",
      "Patchy freezing drizzle possible": "snow.png",
      "Light sleet": "snow.png",
      "Moderate or heavy sleet": "snow.png",
      "Patchy light snow": "snow.png",
      "Light snow": "snow.png",
      "Patchy moderate snow": "snow.png",
      "Moderate snow": "snow.png",
      "Patchy heavy snow": "snow.png",
      "Heavy snow": "snow.png",
      "Ice pellets": "snow.png",
      "Moderate or heavy showers of ice pellets": "snow.png",
      "Light showers of ice pellets": "snow.png",
      "Moderate or heavy snow showers": "snow.png",
      "Light snow showers": "snow.png",
      "Moderate or heavy sleet showers": "snow.png",
      "Light sleet showers": "snow.png",
      "Moderate or heavy snow with thunder": "storm.png",
      "Patchy light snow with thunder": "storm.png",
      "Moderate or heavy rain with thunder": "storm.png",
      "Patchy light rain with thunder": "storm.png",
      "Thundery outbreaks possible": "storm.png",
      Drizzle: "rain.png",
      Mist: "rain.png",
      "Patchy light drizzle": "rain.png",
      "Light drizzle": "rain.png",
      "Heavy freezing drizzle": "rain.png",
      "Patchy light rain": "rain.png",
      "Light rain": "rain.png",
      "Moderate rain": "rain.png",
      "Heavy rain at times": "rain.png",
      "Heavy rain": "rain.png",
      "Light freezing rain": "rain.png",
      "Torrential rain shower": "rain.png",
      "Moderate or heavy rain shower": "rain.png",
      "Light rain shower": "rain.png",
      "Patchy rain possible": "rain.png",
    };

    for (let i = 0; i < iconEls.length; i++) {
      const iconData = data.current.condition.text;
      const iconName = icons[iconData] || "cloud-computing.png";
      const iconPath = `images/icons/${iconName}`;
      iconEls[i].setAttribute("src", iconPath);

      //   console.log(iconData);
    }
  }
}

// current.condition.text
