const urlParams = new URLSearchParams(window.location.search);
let id = parseInt(urlParams.get('id'));

insertEpisodeInfo();

async function insertEpisodeInfo(a) {
    let response = await fetch('./painting?id=' + id);
    let paintingData = await response.json();
    
    document.getElementById("title").innerHTML = paintingData[0].painting_title
    document.getElementById("image").src = paintingData[0].img_src;
    document.getElementById("video").src = paintingData[0].youtube_src;
    document.getElementById("more-text").innerHTML= "Epsiode: " +paintingData[0].episode+"<br>Season: "+paintingData[0].season;
    document.getElementById("content").innerHTML= "'"+paintingData[0].painting_title + "' was created by Bob Ross in one of his many painting tutorials. '" + paintingData[0].painting_title +"' is epsiode " +paintingData[0].episode + " from season " +paintingData[0].season+" from his show 'The Joy of Painting'. It includes the colors "+paintingData[0].colors+".";
}