// console.log("hi");
const urlParams = new URLSearchParams(window.location.search);
let id = parseInt(urlParams.get('id'));
console.log(id);