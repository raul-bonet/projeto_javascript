var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  adivinhaçao();

});



function adivinhaçao() {

  let numero_secreto=2;
  let palpite = Number(document.getElementById("palpite").value);

  do{
    if (palpite!=numero_secreto)
      numero_secreto="Tente novamente";
    while
    if (palpite==numero_secreto)
      numero_secreto="Parabéns, você conseguiu!!";
    }


    document.getElementById("numero_secreto").value = numero_secreto;



}
