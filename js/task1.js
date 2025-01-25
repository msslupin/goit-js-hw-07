const categoriesEl = document.querySelectorAll("#categories .item");
console.log(`Kategoriler: ${categoriesEl.length}`);

categoriesEl.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemCount = category.querySelectorAll("ul li").length;
  console.log(`Kategori: ${title}, Eleman Sayısı: ${itemCount}`);
});
