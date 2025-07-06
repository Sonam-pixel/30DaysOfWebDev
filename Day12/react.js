function processNumbers() {
  const input = document.getElementById("numInput").value;
  
const numArray = input.split(',').map(n => parseInt(n.trim()));
  
 const evenNumbers = numArray.filter(n => n % 2 === 0);
  
const sum = evenNumbers.reduce((acc, val) => acc + val, 0);

let outputText = "Even Numbers: ";
  evenNumbers.forEach(n => outputText += n + " ");

  outputText += `<br>Total Sum: ${sum}`;

  document.getElementById("output").innerHTML = outputText;
}