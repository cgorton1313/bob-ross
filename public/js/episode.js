const urlParams = new URLSearchParams(window.location.search);
let id = parseInt(urlParams.get('id'));

insertEpisodeInfo();

async function insertEpisodeInfo() {
    let response = await fetch('./painting?id=' + id);
    let paintingData = await response.json();
    
    document.getElementById("title").innerHTML = paintingData[0].painting_title
    document.getElementById("video").src = paintingData[0].youtube_src;
    document.getElementById("more-text").innerHTML = "Epsiode: " + paintingData[0].episode + "<br>Season: " + paintingData[0].season;
    document.getElementById("content").innerHTML = "'" + paintingData[0].painting_title + "' was created by Bob Ross in one of his many painting tutorials. '" + paintingData[0].painting_title + "' is epsiode " + paintingData[0].episode + " from season " + paintingData[0].season + " from his show 'The Joy of Painting'. The colors it includes are listed below.";
    var img = document.createElement("img");
    img.setAttribute("src", "img/full-size-paintings/" + paintingData[0].image_file);
    img.setAttribute("alt", "painting");
    document.getElementById("imgDiv").appendChild(img).innerHTML = img

    let text = paintingData[0].colors;
    let result = text.replace(/'/gi, '"');
    const colorsList = JSON.parse(result);

    let text2 = paintingData[0].color_hex;
    let result2 = text2.replace(/'/gi, '"');
    const colorsHexList = JSON.parse(result2);

    for (let i = 0; i < colorsList.length; i++) {
        let half1 = colorsList[i]; 
        let div = "<div class = 'w3-row'><div class='w3-half w3-container'> <h2>- "+half1+"</h2> </div><div class='w3-half w3-container'style='background-color:"+colorsHexList[i]+"'><h2>"+colorsHexList[i]+"</h2></div></div>"
       
        document.getElementById("listOfColors").innerHTML += div
    }
}