'use strict';

let totalVotes = 25;
let allItems = [];
console.log(allItems);

let imgContainer = document.getElementById('container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

let showResultsButton = document.getElementById('results-button');
let resultsList = document.getElementById('results-list');

function Item(name, fileExtension = 'jpg') {
  this.name = name;
  this.views = 0;
  this.votes = 0;
  this.photo = `img/${name}.${fileExtension}`;
  allItems.push(this);
}

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


function getRandomIndex(){
  return Math.floor(Math.random()*allItems.length);
}

function renderImages(){

  let itemOneIndex = getRandomIndex();
  let itemTwoIndex = getRandomIndex();
  let itemThreeIndex = getRandomIndex();

  while(itemOneIndex === itemTwoIndex || itemOneIndex === itemThreeIndex || itemTwoIndex === itemThreeIndex) {
    itemTwoIndex = getRandomIndex();
    itemThreeIndex = getRandomIndex();
  }

  imgOne.src = allItems[itemOneIndex].photo;
  imgOne.alt = allItems[itemOneIndex].name;
  allItems[itemOneIndex].views++;

  imgTwo.src = allItems[itemTwoIndex].photo;
  imgTwo.alt = allItems[itemTwoIndex].name;
  allItems[itemTwoIndex].views++;

  imgThree.src = allItems[itemThreeIndex].photo;
  imgThree.alt = allItems[itemThreeIndex].name;
  allItems[itemThreeIndex].views++;
}

renderImages();


function handleClick(event) {
  totalVotes--;
  let imgClicked = event.target.alt;
  for(let i = 0; i < allItems.length; i++){
    if(imgClicked === allItems[i].name){
      allItems[i].votes++;
    }
  }

  renderImages();
  if(totalVotes === 0){
    imgContainer.removeEventListener('click', handleClick);
  }
}

function handleShowResults(){
  if(totalVotes === 0){
    for(let i = 0; i < allItems.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${allItems[i].name} was picked ${allItems[i].votes} times of the ${allItems[i].views} times it was shown.`;
      resultsList.appendChild(liElem);
    }
  }
}

imgContainer.addEventListener('click', handleClick);
showResultsButton.addEventListener('click', handleShowResults);
