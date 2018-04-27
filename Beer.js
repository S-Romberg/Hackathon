const beerAPI = "https://api.punkapi.com/v2/beers"
const drinkGif = 'http://api.giphy.com/v1/gifs/search?q=drink&api_key=Jt5TZH39Ei7DGga7jzbeddDvoU0FugCm&limit=10'


var descList = [];
var buttons = [1,2,3]
var empty = []


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
    random.id += 'chosen'
    var yeah = document.getElementById('description').appendChild(random)
    populateButtons(random)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function populateButtons(pTag){
  let correct = document.createElement('button')

  correct.textContent = document.getElementById('chosen').classList
  document.getElementById('buttons').appendChild(correct)
  correct.classList += 'beerButton'
  correct.addEventListener('click', handleCorrect)

  var buttonContent = buttons.forEach(yes => {
    var createButton = document.createElement('button')
    createButton.classList += 'beerButton'
    createButton.textContent = descList[getRandomInt(25)].classList.value
    document.getElementById('buttons').appendChild(createButton)
    createButton.addEventListener('click', handleWrong)
  })
  
}

function handleCorrect(event){
  document.getElementById('reaction').textContent = 'YEAH YOU GOT IT RIGHT BITCH'
}
function handleWrong(event){
  fetch(drinkGif)
  .then(function(response){
      return response.json();
  })
  .then(function(response){
      if(empty.length < 10){
      var reactionGif = response.data.map(object => {
          var iframe = document.createElement('iframe')
          iframe.setAttribute('frameBorder', '0')
          iframe.classList += 'reactionGif'
          iframe.src = object.embed_url
          return empty.push(iframe)
      })
    }
  })
  document.getElementById('reaction').appendChild(empty[getRandomInt(10)])
}