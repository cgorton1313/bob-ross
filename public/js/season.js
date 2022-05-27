const urlParams = new URLSearchParams(window.location.search);
let id = parseInt(urlParams.get('season'));


insertEpisodeRow()

async function insertEpisodeRow(){
    let response = await fetch('season?season=' + id);
    let paintingData = await response.json();
    for (let i = 0; i < paintingData.length; i++){
        let episodeRowHtml = `<div class="w3-row-padding">
    <div class="w3-col m6 w3-margin-bottom">
    <div class="w3-display-container">
        <img src="img/full-size-paintings/${paintingData[i].image_file}"
            alt="img" style="width:100%">
        <a href='individual-episode.html?id=${paintingData[i].painting_index}' class="w3-button w3-black w3-block w3-hover-purple">View episode</a>
    </div>
    </div>
    <h3 id = "EpTitle"class="w3-opacity w3-center"><i>${paintingData[i].painting_title}</i></h3>
    <p id = "EpNum"class="w3-opacity w3-center"><i> Episode ${paintingData[i].episode}</i></p>
    </div>`
        document.getElementById("seasonDiv").innerHTML += episodeRowHtml
    }
    document.getElementById("seasonNum").innerHTML = "Season " + id
    
}