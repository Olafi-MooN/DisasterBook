var nomeFormatado = localStorage.usuario.charAt(0).toUpperCase() + localStorage.usuario.slice(1);
var mudarNomeUser = document.querySelector('#userP');
mudarNomeUser.innerText = nomeFormatado;

var mudarNumberMoal = document.querySelector('.umFlex h1');
mudarNumberMoal.innerText = localStorage.numero;


//Adicionar foto de perfil
var mudaFoto = document.querySelector('.fotoImgMenu img');
var modal = document.querySelector('.modal');
mudaFoto.addEventListener('click',() => {
    var umFlex = document.querySelector('.umFlex');
    var filho = document.querySelector('.umFlex h1');
    var filho2 = document.querySelector('.umFlex i');
    umFlex.removeChild(filho);
    umFlex.removeChild(filho2);

    let divLayout = document.createElement('div');
    divLayout.style.display = 'flex';
    divLayout.style.flexDirection = 'column'
    umFlex.appendChild(divLayout);

    let pegarImg = document.createElement('input');
    pegarImg.type = 'file';
    divLayout.appendChild(pegarImg);

    let criarButton = document.createElement('button');
    criarButton.innerText = 'Mudar foto';
    divLayout.appendChild(criarButton);

    criarButton.addEventListener('click', (e) => {
        e.preventDefault();

        alert('Ainda não concluimos esta parte, desculpe-nos')
    })

    modal.style.display = 'flex';
})