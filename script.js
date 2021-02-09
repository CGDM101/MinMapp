// function to perform a get request
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

// function to get a random image
function getRandomImage()
{
  // get the json from the server
  var json = httpGet('https://dog.ceo/api/breeds/image/random');
  console.log(json);

  // decode the json into an array
  var array = JSON.parse(json);
  console.log(array);
  
  // get the image url from the array
  var url = array.message;
  console.log(url);
  
  // get the image object
  var image = document.getElementById('dogImage');
  
  // set the src of the image object
  image.src = url;
}

// metod för att få random Corgi:
function getRandomCorgi()
{
  var json = httpGet('https://dog.ceo/api/breed/corgi/images/random');
  console.log(json);
  var array = JSON.parse(json);
  console.log(array);
  var url = array.message;
  console.log(url);
  var image = document.getElementById('corgiImage');
  image.src = url;
}


// metod för att få random hund inom ras som användaren väljer:
function getRandomFromBreed()
{
  // alltid Corgi just nu:
  var json = httpGet('https://dog.ceo/api/breed/corgi/images/random');
  console.log(json);
  var array = JSON.parse(json);
  console.log(array);
  var url = array.message;
  console.log(url);
  var image = document.getElementById('breedImage');
  image.src = url;

  var beagleSelected = document.getElementById("dogbreeds").selectedIndex = 0;
  var dachsundSelected = document.getElementById("dogbreeds").selectedIndex = 1;
  var corgiSelected = document.getElementById("dogbreeds").selectedIndex = 2;

  //var x = document.createElement("SELECT"); skapa ett till alternativ.
}