const accesKey = "weUuR1uGDAZuNkPYUWXE-AiNh4T9_t6eWmf3thOFgzA";

var searchFrom = document.getElementById('search_form');

var searchResult = document.getElementById('search_result');
var searchShowBtn = document.getElementById('show_more_btn');
// var searchBtn = document.getElementById('search_btn');

let keyword = "";
let page = 1;
// let location;
async function searchImage() {
    console.log('search image called')
    var searchBox = document.getElementById('search_box').value;
    console.log('search box', searchBox);

    //get the pathname here start
    var pathurl = new URL(
        `http://127.0.0.1:5500/ImageProcessing/base.html`
    ) ;
    var pathNameURl = pathurl.pathname;
    console.log('pathname is:', pathNameURl);
        //get the pathname here end

     

    keyword = searchBox.value;
    var url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const dataResult = data.results;
    console.log('result is', dataResult);



       // get pathname from api 
       var apiPathUrl = new URL(url);
       console.log('api path url is:', apiPathUrl);
       var Pathname = apiPathUrl.pathname;
       console.log('api path name', Pathname);
      // get pathname from api end 

    //   add new api create 

    var newurl = pathurl + Pathname + "?" + searchBox;
    console.log('new url is ', newurl);

       
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

    // var newurl;
    e.preventDefault();
    searchImage()
    // window.location.assign(newurl);
    // window.location.replace(newurl)
    // handle submit
});

if (searchShowBtn) {
    searchShowBtn.addEventListener("click", () => {
        page++;
        searchImage();

    })
}