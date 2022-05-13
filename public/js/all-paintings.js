let response = await fetch('./paintings');
let paintingData = await response.json();

//const paintingData = [{painting_index: 283, season: 1, episode: 2, painting_title: 'Mt. McKinley'},{painting_index: 284, season: 1, episode: 3, painting_title: 'Ebony Sunset'}];

// image src, painting title, season, episode, num-colors, youtube src, colors

for (let i = 0; i < paintingData.length; i++) {
  insertTableInfo((i + 1), "a", paintingData[i].painting_title, paintingData[i].season, paintingData[i].episode, "4", "5", "6");
}

async function insertTableInfo(rowNum, imgSource, pntTitle, season, episode, numClrs, ytSource, colors) {
  var table = document.getElementById("paintingsTable");
  var row = table.insertRow(rowNum);
  var imgSourceCell = row.insertCell(0);
  var pntTitleCell = row.insertCell(1);
  var seasonCell = row.insertCell(2);
  var episodeCell = row.insertCell(3);
  var numClrsCell = row.insertCell(4);
  var ytSourceCell = row.insertCell(5);
  var colorsCell = row.insertCell(6);
  imgSourceCell.innerHTML = imgSource;
  pntTitleCell.innerHTML = pntTitle;
  seasonCell.innerHTML = season;
  episodeCell.innerHTML = episode;
  numClrsCell.innerHTML = numClrs;
  ytSourceCell.innerHTML = ytSource;
  colorsCell.innerHTML = colors;
}
