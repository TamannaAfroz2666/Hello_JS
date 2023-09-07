const accesKey = "weUuR1uGDAZuNkPYUWXE-AiNh4T9_t6eWmf3thOFgzA";

var searchFrom = document.getElementById('search_form');
var searchBox = document.getElementById('search_box');
console.log('search box', searchBox);
var searchResult = document.getElementById('search_result');
var searchShowBtn = document.getElementById('show_more_btn');
// var searchBtn = document.getElementById('search_btn');

let keyword = "";
let page = 1;

async function searchImage() {
    console.log('search image called')

    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesKey}&per_page=12`;

    // console.log('here is',url);

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const dataResult = data.results;
    console.log('result is', dataResult);
    dataResult.map((result) => {
        const image = document.createElement('img');
        image.src = result.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = '_blank';
        //append child from img to ankor tag
        imageLink.appendChild(image);
        //append child from img to show tag
        searchResult.appendChild(imageLink);

    })
    searchShowBtn.style.display = 'block';
}
searchFrom.addEventListener("submit", (e) => {
    e.preventDefault();
    searchImage()
    // handle submit
});

if (searchShowBtn) {
    searchShowBtn.addEventListener("click", () => {
        page++;
        searchImage();

    })
}