const urlParams = new URLSearchParams(window.location.search);
let id = parseInt(urlParams.get('id'));

getTableInfo();

async function getTableInfo() {
    let response = await fetch('./paintings');
    let paintingData = await response.json();
    for (let i = 0; i < paintingData.length; i++) {
        insertEpisodeInfo(i);
    }
}
async function insertEpisodeInfo(a) {
    let response = await fetch('./paintings');
    let paintingData = await response.json();
    if (paintingData[a].painting_index == id) {
        console.log(paintingData[a]);
        document.getElementById("title").innerHTML = paintingData[a].painting_title
        document.getElementById("image").src = paintingData[a].img_src;
    }
}