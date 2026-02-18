const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("mainContent");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    mainContent.classList.toggle("expanded");
});
const registerBtn = document.querySelector(".btn-primary");
const saleModal = document.getElementById("saleModal");
const confirmModal = document.getElementById("confirmModal");
const successAlert = document.getElementById("successAlert");

const saveSale = document.getElementById("saveSale");
const cancelSale = document.getElementById("cancelSale");
const confirmYes = document.getElementById("confirmYes");
const confirmNo = document.getElementById("confirmNo");

/* Abrir modal */
registerBtn.addEventListener("click", () => {
    saleModal.classList.add("active");
});

/* Guardar venta */
saveSale.addEventListener("click", () => {
    saleModal.classList.remove("active");
    successAlert.style.display = "block";

    setTimeout(() => {
        successAlert.style.display = "none";
    }, 2500);
});

/* Cancelar → mostrar confirmación */
cancelSale.addEventListener("click", () => {
    confirmModal.classList.add("active");
});

/* Confirmar cancelación */
confirmYes.addEventListener("click", () => {
    confirmModal.classList.remove("active");
    saleModal.classList.remove("active");
});

/* No cancelar */
confirmNo.addEventListener("click", () => {
    confirmModal.classList.remove("active");
});
