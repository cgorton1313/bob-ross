insertTableInfo("Painting ID");
insertTableInfo("Bob Ross");
insertTableInfo("a");
insertTableInfo("b");
insertTableInfo("c");
insertTableInfo("d");
insertTableInfo("e");
insertTableInfo("f");


function insertTableInfo(a) {
    const newNode = document.createElement("td");
    const textNode = document.createTextNode(a);
    newNode.appendChild(textNode);

    const list = document.getElementById("myTable");
    list.insertBefore(newNode, list.children[0]);
}
// here is the whole example (what I found). We only need to use the script part but I added everthing just in case
// <!DOCTYPE html>
//{/* <html>
{/* <head>
<style>
table, td {
  border: 1px solid black;
}
</style>
</head>
<body>

<p>Click the button to add a new row at the first position of the table and then add cells and content.</p>

<table id="myTable">
  <tr>
    <td>Row1 cell1</td>
    <td>Row1 cell2</td>
  </tr>
  <tr>
    <td>Row2 cell1</td>
    <td>Row2 cell2</td>
  </tr>
  <tr>
    <td>Row3 cell1</td>
    <td>Row3 cell2</td>
  </tr>
</table>
<br>

<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
}
</script>

</body>
</html> */} 

