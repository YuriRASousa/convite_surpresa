// Função para exibir a seção clicada
function showSection(id) {
    document.querySelectorAll(".content-section").forEach(section => {
        section.style.display = "none";
    });
    document.getElementById(id).style.display = "block";
}

// Mostrar a primeira seção por padrão
document.addEventListener("DOMContentLoaded", () => {
    showSection("entrada");
});
