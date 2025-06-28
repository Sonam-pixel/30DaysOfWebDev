let myArray = [];

function addItem() {
  let input = document.getElementById("itemInput").value;
  if (input !== "") {
    myArray.push(input);
    document.getElementById("itemInput").value = "";
    showArray();
  }
}

function removeItem() {
  myArray.pop();
  showArray();
}

function showArray() {
  document.getElementById("output").innerText = JSON.stringify(myArray);
}
