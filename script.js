const catImage = document.getElementById("cat-image");
const mensagem = document.getElementById("mensagem");

async function carregarGatinho() {
  try {
    mensagem.textContent = "Carregando imagem...";
    catImage.style.display = "none";

    const resposta = await fetch("https://api.thecatapi.com/v1/images/search");

    if (!resposta.ok) {
      throw new Error("Erro ao buscar imagem.");
    }

    const dados = await resposta.json();

    catImage.src = dados[0].url;
    catImage.style.display = "block";
    mensagem.textContent = "";
  } catch (erro) {
    mensagem.textContent = "Não foi possível carregar a imagem do gatinho. Tente novamente.";
    console.error(erro);
  }
}

carregarGatinho();