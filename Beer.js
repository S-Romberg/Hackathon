const beerAPI = "https://api.punkapi.com/v2/beers"
fetch(beerAPI) 
.then(response => response.json())
.then(sortData)
// .then(console.log)

function sortData(data){
    description(data) 
    beerName()
    
}
function description(data){
  var description = data.map(newData => {
    var beerDesco = document.createElement("p")
    beerDesco.setAttribute("class", newData.name)
      newData.description
      
      
  }) 
  
  
  
  
      
  
}