const beerAPI = "https://api.punkapi.com/v2/beers"
var descList = [];
var buttons = [1,2,3]

fetch(beerAPI) 
.then(response => response.json())
.then(sortData)
// .then(console.log)

function sortData(data){
    description(data) 
    // beerName()
    chooseDescription()
    
}
function description(data){
  var description = data.map(newData => {
    var beerDesco = document.createElement("p")
    beerDesco.setAttribute("class", newData.name)
    beerDesco.textContent = newData.description
    descList.push(beerDesco)
  }) 
}
function chooseDescription(something){
    let random = descList[getRandomInt(25)]
    populateButtons(random)
    return document.getElementById('description').appendChild(random)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function populateButtons(pTag){
  console.log(pTag.classList.value);
  var buttonContent = buttons.forEach(yes => {
    var createButton = document.createElement('button')
    createButton.classList += 'beerButton'
    createButton.textContent = descList[getRandomInt(25)].classList.value
    document.getElementById('buttons').appendChild(createButton)
    console.log(createButton.textContent)
  })

}