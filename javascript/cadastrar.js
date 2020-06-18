var btnusuario = document.getElementById('cadastroUsuario');
var btnemail = document.getElementById('cadastroEmail');
var btnsenha = document.getElementById('cadastroSenha');
var btnbairro = document.getElementById('cadastroCelular');

var contador = 0;

var cadastros = [];

function cadastrar(){

    localStorage.setItem("usuario", btnusuario.value);
    localStorage.setItem("email", btnemail.value);
    localStorage.setItem("senha", btnsenha.value);
    localStorage.setItem("numero", btnbairro.value);

    cadastros[contador] = {
        usuario: btnusuario.value,
        email: btnemail.value,
        senha: btnsenha.value,
        numero:  btnbairro.value
    }
    contador++;
}

// verificação de conta 
var usuario = document.querySelector('.usuario');
var senha = document.querySelector('.senha');
function verificarLogin(){
    if(usuario.value === localStorage.usuario && senha.value === localStorage.senha){
        window.location.replace('index.html');
    }else{
        alert('usuario ou senha incorretos');
    }
}