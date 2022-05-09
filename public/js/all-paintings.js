insertTableInfo();


function insertTableInfo() {
    const newNode = document.createElement("td");
    const textNode = document.createTextNode("Bob Ross painting");
    newNode.appendChild(textNode);

    const list = document.getElementById("firstRow");
    list.insertBefore(newNode, list.children[0]);
}