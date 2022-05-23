
getTableInfo();

async function getTableInfo() {
  let response = await fetch('./paintings');
  let paintingData = await response.json();
  for (let i = 0; i < paintingData.length; i++) {
    insertTableInfo((i + 1), paintingData[i].image_file, paintingData[i].painting_title, paintingData[i].painting_index, paintingData[i].season, paintingData[i].episode, paintingData[i].colors, paintingData[i].youtube_src);
  }
}

function insertTableInfo(rowNum, imgFile, pntTitle, pntIndex, season, episode,colors, ytSource ) {
  var table = document.getElementById("paintingsTable");
  var row = table.insertRow(rowNum);
  var imgSourceCell = row.insertCell(0);
  var pntTitleCell = row.insertCell(1);
  var seasonCell = row.insertCell(2);
  var episodeCell = row.insertCell(3);
  var ytSourceCell = row.insertCell(4);
  var colorsCell = row.insertCell(5);
  console.log(imgFile)
  imgSourceCell.innerHTML = `<img src="img/thumbnail-images/${imgFile}"></img>`;
  pntTitleCell.innerHTML = "<a href='individual-episode.html?id="+pntIndex+"'>"+pntTitle+"</a>";
  seasonCell.innerHTML = season;
  episodeCell.innerHTML = episode;
  ytSourceCell.innerHTML = ytSource;
  colorsCell.innerHTML = colors;
}
