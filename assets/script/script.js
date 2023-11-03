let search = document.querySelector('.input-search');
search.addEventListener('keyup', function(event) {

    if (event.key === "Enter") {
      event.preventDefault();
      fetchData();
      document.querySelector('.moveDiv').style.bottom="40vh";
      document.querySelector('.moveMain').style.bottom="60vh";

    }
  });

  fetch(`/weather.json`);

  function  fetchData(){
    const searchBox = document.querySelector('.main-container');
    searchBox.innerHTML ="";





let cityValue = document.querySelector('.input-search').value;

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&appid=e0e81ee2e76187ade4f461b4e4485d54`,)

.then (response => response.json())
.then (data => {
    console.log(data);
    let container = document.querySelector('.main-container');
    
    for(const city of data.list) 
    console.log(city.dt.txt);
    container.innerHTML = `
    <h2>${data.city.name}</h2>
    <p>${data.list[2].dt_txt}, ${data.list[6].weather[0].icon}</p>
    <p>${data.list[3].dt_txt}, ${data.list[6].weather[0].icon}</p>
    <p>${data.list[4].dt_txt}, ${data.list[6].weather[0].icon}</p>
    <p>${data.list[5].dt_txt}, ${data.list[6].weather[0].icon}</p>
    <p>${data.list[6].dt_txt}, ${data.list[6].weather[0].icon}</p>

  

`

})};
