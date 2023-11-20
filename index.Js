let nome = prompt('A quem devo o prazer de estar visitando este site?');
alert('Olá, ' + nome);

let img = "Ghibli.png";
let img2 = "INDEPENDENCIA OU MORTE!.jpg";
let img3 = "napoleon-returned-b527b5-1024.jpg";

function change () {
  document.getElementById("ilustra").src = img;
  let iniciar = img
  img = img2
  img2 = img3
  img3 = iniciar
}

//olá, caro leitor. Poderia me ajudar a tornar a borda ajustável, para que ela fique sempre do tamanho da imagem?