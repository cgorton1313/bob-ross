for (let i = 0; i < 10; i++ ) {
  insertTableInfo((i+1),"b","1","2","3","4","5","6","7");
}


function insertTableInfo(rowNum,info1,info2,info3,info4,info5,info6,info7) {
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
