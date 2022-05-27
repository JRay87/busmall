'use strict';

// Global Variables
let totalVotes = 25;
let allItems = [];
console.log(allItems);

let imgContainer = document.getElementById('container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

let prevRound = [];
let currRound = [];


let showResultsButton = document.getElementById('results-button');

let ctx = document.getElementById('my-chart').getContext('2d');

// Constructor Function

function Item(name, fileExtension = 'jpg') {
  this.name = name;
  this.views = 0;
  this.votes = 0;
  this.photo = `img/${name}.${fileExtension}`;
  allItems.push(this);
}

let retreivedItems = localStorage.getItem('items');
let parsedItems = JSON.parse(retreivedItems);

if(retreivedItems){
  allItems = parsedItems;
} else {
  new Item('bag');
  new Item('banana');
  new Item('bathroom');
  new Item('boots');
  new Item('breakfast');
  new Item('bubblegum');
  new Item('chair');
  new Item('cthulhu');
  new Item('dog-duck');
  new Item('dragon');
  new Item('pen');
  new Item('pet-sweep');
  new Item('scissors');
  new Item('shark');
  new Item('sweep', 'png');
  new Item('tauntaun');
  new Item('unicorn');
  new Item('water-can');
  new Item('wine-glass');
}

// Random Functions
function getRandomIndex() {
  return Math.floor(Math.random() * allItems.length);
}

function getRand() {
  currRound = [];
  let flag = true;
  currRound.push(getRandomIndex());
  currRound.push(getRandomIndex());
  currRound.push(getRandomIndex());
  while (flag) {
    if (currRound[0] !== currRound[1] && currRound[0] !== currRound[2] && currRound[1] !== currRound[2]) {
      flag = false;
    } else {
      currRound = [];
      currRound.push(getRandomIndex());
      currRound.push(getRandomIndex());
      currRound.push(getRandomIndex());
    }
  }
}

getRand();

// Render Functions
function renderImages() {
  prevRound = currRound;

  imgOne.src = allItems[currRound[0]].photo;
  imgOne.alt = allItems[currRound[0]].name;
  allItems[currRound[0]].views++;

  imgTwo.src = allItems[currRound[1]].photo;
  imgTwo.alt = allItems[currRound[1]].name;
  allItems[currRound[1]].views++;

  imgThree.src = allItems[currRound[2]].photo;
  imgThree.alt = allItems[currRound[2]].name;
  allItems[currRound[2]].views++;
}

renderImages();


function renderChart() {
  let itemNames = [];
  let itemVotes = [];
  let itemViews = [];

  for (let i = 0; i < allItems.length; i++) {
    itemNames.push(allItems[i].name);
    itemVotes.push(allItems[i].votes);
    itemViews.push(allItems[i].views);
  }

  let myChartObj = {
    type: 'bar',
    data: {
      labels: itemNames,
      datasets: [{
        label: 'Votes',
        data: itemVotes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(26, 206, 86, 0.2)',
          'rgba(140, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(110, 99, 132, 0.2)',
          'rgba(130, 162, 235, 0.2)',
          'rgba(260, 206, 86, 0.2)',
          'rgba(15, 192, 192, 0.2)',
          'rgba(32, 99, 132, 0.2)',
          'rgba(40, 162, 235, 0.2)',
          'rgba(35, 206, 86, 0.2)',
          'rgba(120, 192, 192, 0.2)',
          'rgba(200, 99, 132, 0.2)',
          'rgba(125, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 120, 192, 0.2)',
          'rgba(153, 200, 255, 0.2)',
          'rgba(255, 159,200, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(26, 206, 86, 1)',
          'rgba(140, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(110, 99, 132, 1)',
          'rgba(130, 162, 235, 1)',
          'rgba(260, 206, 86, 1)',
          'rgba(15, 192, 192, 1)',
          'rgba(32, 99, 132, 1)',
          'rgba(40, 162, 235, 1)',
          'rgba(35, 206, 86, 1)',
          'rgba(120, 192, 192, 1)',
          'rgba(200, 99, 132, 1)',
          'rgba(125, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 120, 192, 1)',
          'rgba(153, 200, 255, 1)',
          'rgba(255, 159,200, 1)'
        ],
        borderWidth: 1
      },
      {
        label: 'Times Viewed',
        data: itemViews,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(26, 206, 86, 0.2)',
          'rgba(140, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(110, 99, 132, 0.2)',
          'rgba(130, 162, 235, 0.2)',
          'rgba(260, 206, 86, 0.2)',
          'rgba(15, 192, 192, 0.2)',
          'rgba(32, 99, 132, 0.2)',
          'rgba(40, 162, 235, 0.2)',
          'rgba(35, 206, 86, 0.2)',
          'rgba(120, 192, 192, 0.2)',
          'rgba(200, 99, 132, 0.2)',
          'rgba(125, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 120, 192, 0.2)',
          'rgba(153, 200, 255, 0.2)',
          'rgba(255, 159,200, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(26, 206, 86, 1)',
          'rgba(140, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(110, 99, 132, 1)',
          'rgba(130, 162, 235, 1)',
          'rgba(260, 206, 86, 1)',
          'rgba(15, 192, 192, 1)',
          'rgba(32, 99, 132, 1)',
          'rgba(40, 162, 235, 1)',
          'rgba(35, 206, 86, 1)',
          'rgba(120, 192, 192, 1)',
          'rgba(200, 99, 132, 1)',
          'rgba(125, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 120, 192, 1)',
          'rgba(153, 200, 255, 1)',
          'rgba(255, 159,200, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  new Chart(ctx, myChartObj);

}

// Eventlisteners etc.,
function handleClick(event) {
  totalVotes--;
  let imgClicked = event.target.alt;

  let flag = true;

  while (flag) {
    flag = false;
    getRand();
    for (let i = 0; i < currRound.length; i++) {

      for (let j = 0; j < prevRound.length; j++) {
        if (prevRound[j] === currRound[i])
          flag = true;
      }
    }
  }
  for (let i = 0; i < allItems.length; i++) {
    if (imgClicked === allItems[i].name) {
      allItems[i].votes++;
    }
  }
  renderImages();
  if (totalVotes === 0) {
    imgContainer.removeEventListener('click', handleClick);
    let stringItems = JSON.stringify(allItems);
    localStorage.setItem('items', stringItems);
  }
}



function handleShowResults() {
  if (totalVotes === 0) {
    renderChart();
    imgContainer.removeEventListener('click', handleShowResults);
  }
}

imgContainer.addEventListener('click', handleClick);
showResultsButton.addEventListener('click', handleShowResults);
