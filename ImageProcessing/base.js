const accesKey ="weUuR1uGDAZuNkPYUWXE-AiNh4T9_t6eWmf3thOFgzA";

var searchFrom = document.getElementById('search_form');
var searchBox = document.getElementById('search_box');
console.log('search box', searchBox);
var searchResult = document.getElementById('search_result');
var searchShowBtn = document.getElementById('show_more_btn');

let keyword = "";
let page = 1;

async function searchImage(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesKey}`;

    // console.log('here is',url);

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const dataResult = data.results;
    console.log('result is', dataResult);
    dataResult.map((result) =>{
         const image = document.createElement('img');
         image.src = result.urls.small;
         const imageLink = document.createElement('a');
         imageLink.href = result.links.html;
         imageLink.target = '_blank';
         //append child
         imageLink.appendChild(image);

    })

    

    
    
}

if(searchFrom){
searchFrom.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImage();
})
}