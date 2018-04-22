/* BEM VINDO, MARINHEIRO 
   O desafio demorou mas saiu rápido
   Antes de tudo, leia todas as dicas e obersações no link do desafio
   ...
   *-* Todo conteudo dentro de $(document).ready( function() { ... } ); será execultado assim que carregar a página
*/


function mostrar(id) {
 
      document.getElementById(id).style.display = 'block';
    
    
}

function esconder(id) {

  document.getElementById(id).style.display = 'none';
    
}



$(document).ready(function() {
  
    contador();
    
     
    $("#alerta").draggable();



 //fechar a div alert no X
   $('.fa').click(function (event) {
    $('#alerta').hide();}
    );





    $("#novidadesform [type='submit']").click(function(e) {
        e.preventDefault();

        
var field_email = $("input[type=text][name=email]").val();

        if(field_email){
            $.ajax({
                url: 'http://51.254.204.44/ti/enviar_email.php',
                type: 'post',
                data: {'usuario': 'Usuario', 'meuemail' : field_email},
                dataType: 'JSON',

            success: function(retorno){
                 toastr.success(retorno.text);
                $('.resultado').html(field_email + " foi salvo em nossa lista de novidades =)");
                 $("input[type=text][name=email]").val(null);
                 setTimeout(toggleAlert,2000);
            },

            error: function(erro){
                toastr.error(erro.responseJSON.text, 'Error!');
            }
            })
        }
        else{
            toastr.error('Preencha um email!', 'Atenção!');

        }
 


    });
});

/* NÃO MEXER 
   Se tiver visível, após executar a função, a div será oculta e vice-versa
*/
function toggleAlert() {

    $('#alerta').slideToggle();
}

//Contador inicia em 5
var i = 5;

function contador() {

    setInterval(function(){ Timer() }, 1000);
}

function Timer() {

    if(i <=3 ) {

        $('#contador').css("color", "#FF0000");
    }
    
    if (i == 0) {
         $('#contador').hide();
         toggleAlert();
     }


    document.getElementById('contador').innerText = "Alerta aparecendo em: " + i + "s";

    i--;



}

