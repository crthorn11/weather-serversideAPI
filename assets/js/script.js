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

function getApi() {
  
  var requestUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=7a93581a9091d6474b9d472ae7167ce6`;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      for (var i = 0; i < data.length; i++) {
    
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('a');

        link.textContent = data[i].html_url;
        link.href = data[i].html_url;

        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
    });
}

fetchButton.addEventListener('click', getApi);
function getUserInput() {
  var city = document.getElementById("city-input");
  fetchButton.addEventListener('click', getUserInput);
  document.getElementById(city-input).city = " ";
}
