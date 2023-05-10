// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

const app = document.querySelector('#results');

function getCharacters(url){
  fetch(url)
  .then(response => {
    console.log('Success', response);
    return response.json();
  })
  .then(data => {
    console.log('Data', data);
    data.forEach((character) =>{
      console.log(character)
      const element = document.createElement('div');
      const name = document.createElement('h2');
      const title = document.createElement('p');
      const pic = document.createElement('img');
      name.textContent = `${character.firstName} ${character.lastName}`;
      title.textContent = character.title;
      pic.src = character.imageUrl;
      element.className = 'figure';
      pic.style.width = '100%'
      pic.style.height = '70%'
      pic.style.paddingBottom = '10px'
      name.style.maxWidth = '80%'
      name.style.margin = 'auto'
      name.style.fontSize = '25px'
      name.style.fontWeight = 'bold'
      name.style.paddingBottom = '10px'
      title.style.maxWidth = '80%'
      title.style.margin = 'auto'
      title.style.fontWeight = 'bold'
      element.style.margin = '5px'
      element.style.width = '250px'
      element.style.height = '400px'
      app.style.display = 'flex'
      app.style.flexFlow = 'row wrap'
      app.style.flexDirection = 'row'
      app.style.justifyContent = 'center'
      element.append(pic);
      element.append(name);
      element.append(title);
      app.append(element)
    });
  })
  .catch(error => {
    console.error('request failed', error);
    const element = document.createElement('div');
    element.textContent = "An error occured. Please Try again.";
    app.append(element); 
  });
}

getCharacters(url);