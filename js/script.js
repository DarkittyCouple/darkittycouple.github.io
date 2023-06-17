// Obtém a referência para o botão de envio no seu script JavaScript
const button = document.getElementById('enviar');
const respostasList = document.getElementById('respostas');

// Adiciona um ouvinte de evento para o clique no botão de envio
button.addEventListener('click', function() {
  // Obtém o valor da opção selecionada
  const selectedOption = document.querySelector('input[name="place"]:checked').value;

  // Cria um novo item de lista para a resposta
  const respostaItem = document.createElement('li');
  respostaItem.textContent = selectedOption;

  // Adiciona a resposta à lista de respostas
  respostasList.appendChild(respostaItem);
});