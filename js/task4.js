document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Sayfa yeniden yüklenmesin

    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    // Formun boş olup olmadığını kontrol et
    if (!email || !password) {
      alert("All form fields must be filled in");
      return;
    }

    // Alan adları ve değerleri içeren nesneyi oluştur
    const formData = {
      email: email,
      password: password,
    };

    // Konsola verileri yazdır
    console.log(formData);

    // Formu sıfırla
    form.reset();
  });
});
