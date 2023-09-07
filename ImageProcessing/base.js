const accesKey = "weUuR1uGDAZuNkPYUWXE-AiNh4T9_t6eWmf3thOFgzA"

var searchFrom = document.getElementById('search_form');
var searchBox = document.getElementById('search_box');
var searchResult = document.getElementById('search_result');
var searchShowBtn = document.getElementById('show_more_btn');

let keyword = "";
let page = 1;

async function searchImage(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}`

}