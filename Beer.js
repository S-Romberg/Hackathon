const beerAPI = "https://api.punkapi.com/v2/beers"
fetch(beerAPI) 
.then(response => response.json())
.then(sortData)
// .then(console.log)

function sortData(data){
    description(data) 
    
}
function description(data){
  console.log(data);
  
      
  
}