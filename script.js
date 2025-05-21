document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("darkMode");

  botao.addEventListener("click", function () {
    document.body.classList.toggle("escuro");
    botao.textContent = document.body.classList.contains("escuro")
      ? "Modo Claro"
      : "Modo Escuro";
  });

  const campos = ["sobre", "experiencia"];
  campos.forEach(id => {
    const salvo = localStorage.getItem(id);
    if (salvo) {
      document.getElementById(id).innerHTML = salvo;
    }
  });
});

function salvarTexto(id) {
  const conteudo = document.getElementById(id).innerHTML;
  localStorage.setItem(id, conteudo);
  alert("Alterações salvas!");
}

function salvarComentario() {
  const c = document.getElementById("comentario").value;
  localStorage.setItem("comentario", c);
  document.getElementById("mostrarComentario").textContent = c;
}

window.addEventListener("DOMContentLoaded", () => {
  const salvo = localStorage.getItem("comentario");
  if (salvo) document.getElementById("mostrarComentario").textContent = salvo;
});


