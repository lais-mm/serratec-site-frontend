
(function(){
    
    var btnSubmit = document.querySelector('#btn-submit');
    var nome = document.querySelector('#name');
    var email = document.querySelector('#email');
    var assunto = document.querySelector('#subject');
    var mensagem  = document.querySelector('#message');


    btnSubmit.addEventListener('click', alerta);

    function alerta(){

        event.preventDefault();
        if(!nome.value || !email.value || !subject.value || !message.value){
            swal("Opss", "Preencha todos os campos", "warning");
        
        }else{
            swal("Olá!", "Sua mensagem foi enviada!", "success");

            return removeCampos();
        }
      
         }
         function removeCampos(){
            nome.value="";
            email.value="";
            assunto.value="";
            mensagem.value="";
         }

        
})()


  
