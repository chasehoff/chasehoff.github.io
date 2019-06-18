/*
 * events.js
 * 
*/
/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/hikersguide.json
*/

//Instantiate new XMLHttpRequest
var request = new XMLHttpRequest();

request.onload = function() {
    var data = JSON.parse(request.responseText);

    //select all event articles
    var eventArticles = document.querySelectorAll('#event article')
    if(eventArticles){
        for(var i = 0; i < eventArticles.length; i++){
            eventArticles[i].querySelector('h3').innerHTML = data.events[i].title;
            eventArticles[i].querySelector('h4').innerHTML = data.events[i].location;
            eventArticles[i].querySelector('p').innerHTML = data.events[i].text;
        }
    }
}
request.open('GET','https://joshbloom.github.io/dws1/data/hikersguide.json',true);
request.send(null);