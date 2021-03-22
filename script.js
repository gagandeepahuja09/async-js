'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


const displayCountryInfo = (country) => {
  const request = new XMLHttpRequest()
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`)
  request.send()

  // request also has add event listener
  // means it's child of EventTarget
  request.addEventListener('load', function() {
    const [data] = JSON.parse(this.responseText)
    console.log(data)

    const { flag, alpha3Code, capital, population, currencies, languages } = data

    const countryContainerHtml = (`
    <article class="country">
      <img class="country__img" src="${flag}" />
      <div class="country__data">
        <h3 class="country__name">${alpha3Code}</h3>
        <h4 class="country__region">${capital}</h4>
        <p class="country__row"><span>👫</span>${+population / 1000000} M</p>
        <p class="country__row"><span>🗣️</span>${languages[0].name}</p>
        <p class="country__row"><span>💰</span>${currencies[0].name}</p>
      </div>
    </article>
    `)
    countriesContainer.insertAdjacentHTML('beforeend', countryContainerHtml)
    countriesContainer.style.opacity = 1
  })
}

displayCountryInfo('germany')
displayCountryInfo('india')
displayCountryInfo('new zealand')
displayCountryInfo('australia')
displayCountryInfo('spain')
displayCountryInfo('italy')
displayCountryInfo('france')
displayCountryInfo('japan')
