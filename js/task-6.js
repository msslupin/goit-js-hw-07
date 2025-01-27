
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}


const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");


function createBoxes(amount) {
  const fragment = document.createDocumentFragment(); 

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10; 
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor(); 
    box.style.margin = "5px"; 
    fragment.appendChild(box); 
  }

  boxesContainer.appendChild(fragment); 
}


function destroyBoxes() {
  boxesContainer.innerHTML = ""; 
}


createBtn.addEventListener("click", () => {
  const amount = parseInt(input.value); 

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert("Please enter a number between 1 and 100."); 
    return;
  }

  destroyBoxes(); 
  createBoxes(amount); 

  input.value = ""; 
});


destroyBtn.addEventListener("click", () => {
  destroyBoxes(); 
  input.value = ""; 
});
