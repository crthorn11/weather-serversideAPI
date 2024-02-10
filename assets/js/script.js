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

}

function displayWeatherInfo(data){

}

function displayError(message){

  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
