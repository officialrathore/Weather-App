const api = "b9277d9b8c1580261eefbb62b64f6f9b";
let icon = document.getElementById("imgs");
let temp = document.querySelector(".temp");
let desc = document.querySelector(".desc");
let feel = document.querySelector(".feel");
let hum = document.querySelector(".hum");
let wind = document.querySelector(".wind");
let inp = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let city = inp.value;
  console.log(city);

  getData(city);
});

async function getData(city) {
  try {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`);
    if (!res.ok) {
      throw new Error("Network response is not ok!");
    }
    let data = await res.json();
    console.log(data);

    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    desc.textContent = `${data.weather[0].description}`;
    let absTemp = Math.floor(data.main.temp); 
    temp.textContent = `${absTemp}°C`;
    feel.textContent = `Feels like: ${data.main.feels_like}°C`;
    hum.textContent = `Humidity: ${data.main.humidity}%`;
    wind.textContent = `Wind speed: ${data.wind.speed} m/s`;
  } catch (error) {
    console.error('Error:', error);
  }
}
