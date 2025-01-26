// getRandomHexColor fonksiyonu: Rastgele bir hex renk oluşturur.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// change-color butonuna tıklama olayını dinle
document.querySelector(".change-color").addEventListener("click", () => {
  // Rastgele renk oluştur
  const randomColor = getRandomHexColor();

  // body'nin arka plan rengini değiştir
  document.body.style.backgroundColor = randomColor;

  // span.color öğesinin içeriğini güncelle
  document.querySelector(".color").textContent = randomColor;
});
