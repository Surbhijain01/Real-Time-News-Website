let apikey = "3408abaadf6240e38435645e200055f0";


let mainPart = document.querySelector(".Maincontainer");
let inputbar = document.querySelector("#inputbar");
let serchbutton = document.querySelector("#searchbutton");
let obj = [];

window.addEventListener("load", async () => {
  let newsObj = await fetchNews("india");

  console.log(newsObj)

  screenUpadate(newsObj.articles);
})

async function fetchNews(query) {
  let newsObject = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2023-10-16&sortBy=publishedAt&apiKey=${apikey}`);

  
  let obj = await newsObject.json();



  return obj;
}

async function callApi(query) {

  let newsObj = await fetchNews(query);


  screenUpadate(newsObj.articles);
}

serchbutton.addEventListener("click", () => {

  console.log(inputbar.value);
  callApi(inputbar.value);
  inputbar.value = "";
})




function screenUpadate(obj) {
  mainPart.innerHTML = "";

  console.log(obj);

  for (let i = 0; i < obj.length; i++) {

    let currObj = obj[i];

    let title = currObj.title;
    let des = currObj.description;
    let imageLink = currObj.urlToImage;

    let childEle = document.createElement('div');
    childEle.innerHTML = `<div class="card height" style="width: 18rem;">
        <img class="card-img-top" src="${imageLink}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${des}</p>
          <a href=${"https://timesofindia.indiatimes.com/sports/cricket/icc-world-cup/news/icc-world-cup-india-vs-new-zealand-daryl-mitchells-approach-vs-spin-is-a-caution-alert-for-india/articleshow/104638944.cms"
      } class="btn btn-primary">Read More</a>
        </div>
      </div>`;

    mainPart.appendChild(childEle);
  }
}