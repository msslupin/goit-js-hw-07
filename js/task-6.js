// Rastgele renk oluşturan fonksiyon
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// input, create ve destroy düğmelerini seçiyoruz
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

// Yeni kutuları oluşturma fonksiyonu
function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10; // İlk kutu 30x30px, her sonraki 10px daha büyük
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor(); // Rastgele arka plan rengi
    boxes.push(box);
  }

  // Tüm kutuları DOM'a ekliyoruz
  boxesContainer.append(...boxes);
}

// Kutaları temizleme fonksiyonu
function destroyBoxes() {
  boxesContainer.innerHTML = ""; // Tüm kutuları kaldırıyoruz
}

// Create butonuna tıklama işlemi
createBtn.addEventListener("click", () => {
  const amount = parseInt(input.value); // Input değerini alıyoruz

  if (amount < 1 || amount > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  destroyBoxes(); // Mevcut kutuları temizliyoruz
  createBoxes(amount); // Yeni kutuları oluşturuyoruz

  input.value = ""; // Input değerini temizliyoruz
});

// Destroy butonuna tıklama işlemi
destroyBtn.addEventListener("click", () => {
  destroyBoxes(); // Tüm kutuları kaldırıyoruz
  input.value = ""; // Input değerini temizliyoruz
});
