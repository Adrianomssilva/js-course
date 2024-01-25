
// Declarando um array
let contactList = [
  {
    'name' : 'Foto bonita',
    'email' : 'fotobonita@email.com',
    'city' : 'Salvador',
    'state' : 'Bahia',
    'country' : 'Brasil',
    'image' : 'https://cdn.pixabay.com/photo/2023/05/25/07/38/antarctica-8016562_1280.jpg'
  },
  {
    'name' : 'Foto Linda',
    'email' : 'fotolinda@email.com',
    'city' : 'Central',
    'state' : 'Bahia',
    'country' : 'Brasil',
    'image' : 'https://cdn.pixabay.com/photo/2023/05/25/07/38/antarctica-8016562_1280.jpg'
  },

];

console.log(contactList)

// Manipulando elementos html

let resultado = document.getElementById('resultado')

function printData(){
  resultado.innerHTML= "Texto enviado do js"
}

let result = document.getElementById('result')

async function printPeople() {
  let people = await fetch('https://randomuser.me/api/?results=5')

  let {results} = await people.json();
    console.log(results)
    results.forEach(contact => {
      let li = document.createElement('li');

      li.innerHTML = `<div>
                        <img width="180px" src="${contact.picture.large}" alt="Antardica">
                        <h2>${contact.name.first} ${contact.name.last}</h2>
                        <span>${contact.email}</span>
                        <p>${contact.location.city}</p>
                        <button>${contact.location.country}</button>
                      </div>`;

    result.appendChild(li)
    })

}