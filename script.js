const toggleBtn = document.getElementById("darkToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const icon = toggleBtn.querySelector("i");
  if (body.classList.contains("dark")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
});
document.querySelectorAll('.doc-link').forEach(link => {
  link.addEventListener('click', async (e) => {
    e.preventDefault(); // evitamos que abra inmediatamente
    const url = link.getAttribute('href');

    try {
      const response = await fetch(url, { method: 'HEAD' }); // solo comprobamos si existe
      if (!response.ok) throw new Error('Documento no encontrado');

      // Si existe, abrimos en nueva pestaña
      window.open(url, '_blank');
    } catch (err) {
      alert(`⚠ No se pudo abrir el documento: ${err.message}`);
      console.error(err);
    }
  });
});
