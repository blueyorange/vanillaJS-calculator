document.getElementById("calculator").addEventListener("click", handleClick);
const screen = document.getElementById("display-input");

let currentInput = [];
let operatorSelected = true;

function handleClick(e) {
  const { action } = e.target.dataset;
  const value = e.target.value;
  switch (action) {
    case "number":
      if (screen.value == 0 || operatorSelected) {
        operatorSelected = false;
        screen.value = "";
      }
      screen.value = screen.value + value;
      currentInput.push(value === "0" ? "" : value);
      break;
    case "operator":
      if (operatorSelected) {
        currentInput.pop();
      }
      operatorSelected = true;
      currentInput.push(value);
      break;
    case "clear":
      screen.value = "0";
      currentInput = [];
      break;
    case "cancel-entry":
      screen.value = "0";
      break;
    case "evaluate":
      screen.value = String(eval(currentInput.join(""))).slice(0, 10);
      currentInput = [screen.value];
      break;
  }
  console.log(currentInput.join(""));
}
