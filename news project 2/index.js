console.log('138e31e5885a4c7591511c8daabef7dd');

// grabbing the element from mother-code
let newsAccordion=document.getElementById('newsAccordion');

//creating  ajax request
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=138e31e5885a4c7591511c8daabef7dd');

// What to do when the request is complete
xhr.onload = function() {
    if (this.status===200) {
        // console.log(this.responseText);
        let json=JSON.parse(this.responseText);
        // console.log(json);// displays the json data
        // console.log(json.articles);// displays only the articles
        let newsHTML='';
        articles=json.articles;
        articles.forEach(function(element,index){

            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHTML+=news;

        });
        newsAccordion.innerHTML=newsHTML; 


        // code given by github piolet -- it shows all the news in on go
        // for(news in json.articles){
        //     // console.log(news);
        //     // console.log(json.articles[news]);
        //     let newsAccordianItem=document.createElement('div');
        //     newsAccordianItem.classList.add('newsAccordianItem');
        //     newsAccordian.appendChild(newsAccordianItem);
        //     let newsAccordianTitle=document.createElement('h3');
        //     newsAccordianTitle.innerHTML=json.articles[news].title;
        //     newsAccordianItem.appendChild(newsAccordianTitle);
        //     let newsAccordianContent=document.createElement('p');
        //     newsAccordianContent.innerHTML=json.articles[news].content;
        //     newsAccordianItem.appendChild(newsAccordianContent);
        // }
    } else {
        console.error("Something went wrong");
    }
}
xhr.send();
