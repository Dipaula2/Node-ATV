
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contatoForm");

  form.addEventListener("submit", (event) => {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    
    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      event.preventDefault(); 
      return;
    }

   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um email válido.");
      event.preventDefault();
      return;
    }

    
    alert("Formulário enviado com sucesso!");
  });
});
