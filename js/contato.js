const formularioContato = document.querySelector(".formulario-contato");

formularioContato.addEventListener("submit", (event) => {
  event.preventDefault();

  const dados = new FormData(formularioContato);

  const numeroWhatsApp = "5531999255745";

  const mensagem = `
Olá! Gostaria de entrar em contato com a Jornada Viagens.

Nome: ${dados.get("nome")}
Telefone: ${dados.get("telefone")}
E-mail: ${dados.get("email")}
Assunto: ${dados.get("assunto")}

Mensagem:
${dados.get("mensagem")}
`;

  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  window.open(linkWhatsApp, "_blank", "noopener,noreferrer");
});
