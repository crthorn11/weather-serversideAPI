//I need to create a title called Weather Dashboard
//I need to create a side menu area
//I need to create a search bar as a form input
//list some cities below the form input search bar?
//create a div box in body for the current day and conditions
//use html just to see what each card will look like
//delete each card as I will have script add the cards for me now that I know what they look like
//create a lower portion with 5 seperate boxes of weather conditions for the next 5 days
//link the API
//confirm that everything works (use bootstrap to speed up the process?)

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "7a93581a9091d6474b9d472ae7167ce6";

weatherForm.addEventListener("submit",async event => {
 
  event.preventDefault();

  const city = cityInput.value;

  if(city){
try{
const weatherData = await getWeatherData(city);
displayWeatherInfo(weatherData);
}
catch(error){
  console.error(error);
  displayError(error);
}
  }
  else{
    displayError("error, Please enter a city");
  }
});

async function getWeatherData(city){

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const response = await fetch(apiUrl);

  if(!response.ok){
    throw new Error("Could not get weather status");

  }
  return await response.json();
}

function displayWeatherInfo(data){

const {name: city, main: {temp, humidity}, weather: [{description, id}]} = data;

card.textContent = "";
card.style.display = "flex";

const cityDisplay = document.createElement("h1");
const tempDisplay = document.createElement("p");
const humidityDisplay = document.createElement("p");
const descDisplay = document.createElement("p");

cityDisplay.textContent = city;
tempDisplay.textContent = `${((temp - 273.15) * (9/5) + 32).toFixed(1)}f`;
humidityDisplay.textContent = `Humidity: ${humidity}%`;
descDisplay.textContent = description;

cityDisplay.classList.add("cityDisplay");
tempDisplay.classList.add("tempDisplay");
humidityDisplay.classList.add("humidityDisplay");
descDisplay.classList.add("descDisplay");


card.appendChild(cityDisplay);
card.appendChild(tempDisplay);
card.appendChild(humidityDisplay);
card.appendChild(descDisplay);
}

function displayError(message){

  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}

const days = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday",];

function CheckDay(day){
  if(day =d.getDay() > 6){
    return day =d.getDay()-7;
  }
  else{
    return day +d.getDay();
  }
}