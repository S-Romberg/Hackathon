const beerAPI = "https://api.punkapi.com/v2/beers"
var descList = [];


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
    return document.getElementById('description').textContent = descList[getRandomInt(25)]
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
