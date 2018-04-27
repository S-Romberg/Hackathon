const apiURL = "http://api.giphy.com/v1/gifs/search?q=kids+falling+over&api_key=Jt5TZH39Ei7DGga7jzbeddDvoU0FugCm&limit=8"

fetch(apiURL)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log(response.data);
        var gif = response.data.map(object => {
            var iframe = document.createElement('iframe')
            iframe.setAttribute('frameBorder', '0')
            document.getElementById('bs').appendChild(iframe)
            iframe.src = object.embed_url
        })
    })
