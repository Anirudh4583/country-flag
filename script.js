const countries = document.getElementById('countries');
const flag = document.getElementById('flag');
const sel = document.getElementById('countries');

getCountries();

function run() {
  var selectedValue = sel.value;
  // console.log('aaaaaoooooo+', x);
  flag.innerHTML = `<img src="https://www.countryflags.io/${selectedValue}/flat/64.png" alt="flag image">`;
}

async function getCountries() {
  const res = await fetch('https://restcountries.eu/rest/v2/all', {
    headers: {
      Accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      data.map((country) => {
        sel.innerHTML += `<option value="${country.alpha2Code}">${country.name}</option>`;
        console.log(country.alpha2Code);
      });
    });
}
