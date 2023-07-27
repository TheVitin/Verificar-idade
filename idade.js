function verificarFase() {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var fase;

    if (idade <= 12) {
      fase = "Criança";
    } else if (idade <= 18) {
      fase = "Adolescente";
    } else if (idade <= 65) {
      fase = "Adulto";
    } else {
      fase = "Idoso";
    }

    document.getElementById("resultado").innerHTML = nome + ", você está na fase da vida: " + fase;
  }