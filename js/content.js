/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/hikersguide.json
*/

//Instantiate new XMLHttpRequest
var request = new XMLHttpRequest();

request.onload = function() {
    var data = JSON.parse(request.responseText);

    ////////////////////////////////////
    //      CTA Article(s)            //
    ////////////////////////////////////
    var ctaArticles = document.querySelectorAll('#cta article')
    if(ctaArticles){
        for(var x = 0; x < ctaArticles.length; x++){
            ctaArticles[x].querySelector('h2').innerHTML = data.locations[x].city;
            ctaArticles[x].querySelector('h3').innerHTML = data.locations[x].title;
            ctaArticles[x].querySelector('p').innerHTML = data.locations[x].text;
        }
    }

    ////////////////////////////////////
    //      Content Articles          //
    ////////////////////////////////////
    var contentArticles = document.querySelectorAll('#features article')
    //Make sure the section actually contains articles to avoid errors
    if(contentArticles){
        //for loop looping through each article, and setting values based on xmlhttprequest from json file
        for(var i = 0; i < contentArticles.length; i++){
            contentArticles[i].querySelector('img').src = data.posts[i].imageURL;
            contentArticles[i].querySelector('h3').innerHTML = data.posts[i].title;
            contentArticles[i].querySelector('h4').innerHTML = data.posts[i].subtitle;
            contentArticles[i].querySelector('p').innerHTML = data.posts[i].text;
        }
    }

    ////////////////////////////////////
    //      Event Articles            //
    ////////////////////////////////////
    var eventArticles = document.querySelectorAll('#events article')
    //Make sure the section actually contains articles to avoid errors
    if(eventArticles){
        //for loop looping through each article, and setting values based on xmlhttprequest from json file
        for(var y = 0; y < eventArticles.length; y++){
            eventArticles[y].querySelector('h4').innerHTML = data.events[y].date;
            eventArticles[y].querySelector('h5').innerHTML = data.events[y].title;
            eventArticles[y].querySelector('p').innerHTML = data.events[y].text;
        }
    }

    ////////////////////////////////////
    //      Hikers Information        //
    ////////////////////////////////////
    var hikerInfo = document.querySelectorAll('#hikers li')
    //Make sure the section actually contains articles to avoid errors
    if(hikerInfo){
        //for loop looping through each article, and setting values based on xmlhttprequest from json file
        for(var z = 0; z < hikerInfo.length; z++){
            hikerInfo[z].querySelector('h4').innerHTML = data.hikers[z].firstname + ", " + data.hikers[z].lastname;
            hikerInfo[z].querySelector('h5').innerHTML = data.hikers[z].city + ", " + data.hikers[z].state;
        }
    }

    ////////////////////////////////////
    //     Miscellaneous              //
    ////////////////////////////////////
    document.querySelector('#about h6').innerHTML = data.about.title;
    document.querySelector('#about p').innerHTML = data.about.text;
}
request.open('GET','https://joshbloom.github.io/dws1/data/hikersguide.json',true);
request.send(null);
