
const paintingData = [{painting_index: 283, season: 1, episode: 2, painting_title: 'Mt. McKinley'},{painting_index: 284, season: 1, episode: 3, painting_title: 'Ebony Sunset'}];

// image src, painting title, season, episode, num-colors, youtiube src, colors

for (let i = 0; i < paintingData.length; i++) {
  insertTableInfo((i + 1), "a", paintingData[i].painting_title, paintingData[i].season, paintingData[i].episode, "4", "5", "6", "7");
}

function insertTableInfo(rowNum, info1, info2, info3, info4, info5, info6, info7) {
  var table = document.getElementById("paintingsTable");
  var row = table.insertRow(rowNum);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  cell1.innerHTML = info1;
  cell2.innerHTML = info2;
  cell3.innerHTML = info3;
  cell4.innerHTML = info4;
  cell5.innerHTML = info5;
  cell6.innerHTML = info6;
  cell7.innerHTML = info7;
}
