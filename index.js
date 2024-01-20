const dropDown = document.querySelector('.dropdownMenu');
const dropOptions = document.querySelector('.drop-options');
const toggle = document.querySelector('.toggle');
const icon = document.querySelector('.bi')
const country = document.querySelector('.country');
const countriess = document.getElementById('countriess');
const countries = document.querySelector('.countries');
const search = document.querySelector('.search');
const regions = document.querySelector('.regions');
const regionName = document.getElementsByClassName('.regionName');

toggle && toggle.addEventListener('click', e => {
    document.body.classList.toggle('dark-mode');
    toggle.classList.toggle('dark-mode');
    dropOptions.classList.toggle('dark-mode');
    icon.classList.toggle('bi-moon');
    dropDown.classList.toggle('dark-mode');
})

dropDown.addEventListener('click', e =>  {
dropOptions.classList.toggle('show-options')
});

async function getCountries() {
    const URL = await fetch('https://restcountries.com/v2/all');
    const res = await URL.json();
    console.log(res);
    res.forEach(api => {
        showCountry(api);
    });
}

getCountries()

function showCountry(data) {
    const country = document.createElement('div');
    country.classList.add('country');
    country.innerHTML = 
    `
    <div class="country-img">
        <img src="${data.flag}" alt="">
    </div>
    
    <div class="country-details">
        <h3 class ="countryName">${data.name}</h3>
        <p><strong>Population:</strong>${data.population}</p>
        <p class ="regionName"><strong>Region:</strong>${data.region}</p>
        <p><strong>Capital:</strong>${data.capital}</p>
    </div>`

countries.appendChild(country);
}







