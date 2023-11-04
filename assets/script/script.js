let btnSearchOne = document.querySelector('.btn-search-one');
let btnSearchTwo = document.querySelector('.btn-search-two');
let search = document.querySelector('.input-search');

btnSearchTwo.style.visibility="hidden";

btnSearchOne.addEventListener('click', function() {
  btnSearchOne.style.visibility="hidden";
  btnSearchTwo.style.visibility="visible";
});

search.addEventListener('keyup', function(event) {

    if (event.key === "Enter") {
      event.preventDefault();
      fetchData();
      document.querySelector('.moveDiv').style.bottom="40vh";
      document.querySelector('.moveMain').style.bottom="60vh";
      document.querySelector('.moveMain').style.visibility="visible";
    }
  });
btnSearchTwo.addEventListener('click', function(event) {

    if ('click') {
      console.log('1');
      event.preventDefault();
      fetchData();
      document.querySelector('.moveDiv').style.bottom="40vh";
      document.querySelector('.moveMain').style.bottom="60vh";
      document.querySelector('.moveMain').style.visibility="visible";
    }
  });

  fetch(`weather.json`);

  function  fetchData(){
    const searchBox = document.querySelector('.main-container');
    searchBox.innerHTML ="";





let cityValue = document.querySelector('.input-search').value;

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&units=metric&appid=e0e81ee2e76187ade4f461b4e4485d54`,)

.then (response => response.json())
.then (data => {
    let container = document.querySelector('.main-container');
    
    for(const city of data.list) 
    container.innerHTML = `
    <h2>${data.city.name}</h2>
    <div class="weatherDiv">
    <p><span>Date : </span>${data.list[7].dt_txt}</p>
    <p><span>Temperature : </span>${data.list[7].main.temp} °C</p>
    </div>
    <div class="weatherDiv">
    <p><span>Date : </span>${data.list[8].dt_txt}</p>
    <p><span>Temperature : </span>${data.list[8].main.temp} °C</p>
    </div>
    <div class="weatherDiv">
    <p><span>Date : </span>${data.list[9].dt_txt}</p>
    <p><span>Temperature : </span>${data.list[9].main.temp} °C</p>
    </div>
    <div class="weatherDiv">
    <p><span>Date : </span>${data.list[10].dt_txt}</p>
    <p><span>Temperature : </span>${data.list[10].main.temp} °C</p>
    </div>
    <div class="weatherDiv">
    <p><span>Date : </span>${data.list[11].dt_txt}</p>
    <p><span>Temperature : </span>${data.list[11].main.temp} °C</p>
     
    </div>

  

`

})};
