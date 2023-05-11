const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';
const houses = [];
const numbOfHouseMembers = [];

const parseData = async () => {
  await fetch(url)
  .then(response => {
    console.log('Success', response);
    return response.json();
  })
  .then(data => {
    data.forEach((character) => {
      if(character.family === 'House Lanister' || character.family === 'Lanister')
        character.family = 'House Lannister';
      if(character.family === 'Tararyan')
        character.family = 'House Targaryen'
      const houseIndex = houses.findIndex((house) => { 
        if(house !== character.family){
          if(house.split(' ')[1] === character.family)
            return house.split(' ')[1] === character.family;
        }
        else
          return house === character.family;
        });
      if ( houseIndex !== -1 ) {
        numbOfHouseMembers[houseIndex] += 1;
      }
      else {
        if (character.family.split(' ')[0] === 'House'){
          houses.push(character.family);
          numbOfHouseMembers.push(1);
        }
        else if(houses.includes('None')){
          numbOfHouseMembers[houses.lastIndexOf('None')] += 1;
        }
        else{
          houses.push('None');
          numbOfHouseMembers.push(1);
        }
      }
    })
  })
  .catch(error => {
    console.error('request failed', error);
  });
  console.log(houses);
  console.log(numbOfHouseMembers);

  renderChart();
}


const renderChart = () => {
  const donutChart = document.querySelector('.donut-chart');
  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: houses,
      datasets: [{
          label: 'My First Dataset',
          data: numbOfHouseMembers,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        position: 'bottom'
      }
    }
  });
};

parseData(url);