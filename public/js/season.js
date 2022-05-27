const urlParams = new URLSearchParams(window.location.search);
let id = parseInt(urlParams.get('season'));
let episodeRowHtml = `<div class="w3-row-padding">
<div class="w3-col m6 w3-margin-bottom">
    <div class="w3-display-container">
        <img src="https://htmlcolorcodes.com/assets/images/colors/pastel-purple-color-solid-background-1920x1080.png"
            alt="Purple" style="width:100%">

        <button class="w3-button w3-black w3-block w3-hover-purple">View episode</button>
    </div>
</div>
<h3 class="w3-opacity w3-center"><i>Episode Name</i></h3>
<p class="w3-opacity w3-center"><i>Episode</i></p>
<p class="w3-opacity w3-center"><i>Text discription</i></p>
</div>`

insertEpisodeRow()

async function insertEpisodeRow(){
    let response = await fetch('season?season=' + id);
    let paintingData = await response.json();
    for (let i = 1; i < paintingData.length; i++){
        document.getElementById("seasonDiv").innerHTML += episodeRowHtml
    }
}