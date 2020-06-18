var compartilha = document.querySelector('#compartilhaClick');
var areadepost = document.querySelector('.areadepost2');

compartilha.addEventListener('click', () => {
    var texto = document.querySelector("#getTexto").value;
    var nomeFormatado = localStorage.usuario.charAt(0).toUpperCase() + localStorage.usuario.slice(1);
    var data = new Date();
    var dataFormatada = data.getDate() +"/"+ '0'+(data.getMonth()+1) +"/"+data.getFullYear();

    let postagens = document.createElement('div');
    postagens.className = 'postagens';
    let fotoPerfil = document.createElement('div');
    fotoPerfil.className = 'fotoPerfil';
    let fotoImg = document.createElement('div');
    fotoImg.className = 'fotoImg';
    let img = document.createElement('img');
    let nomePessoa = document.createElement('div');
    nomePessoa.className = 'nomePessoa';
    let h3nome = document.createElement('h3');
    h3nome.textContent = nomeFormatado;
    let h3Postagem = document.createElement('h3');
    h3Postagem.textContent = dataFormatada;
    let comentarioPost = document.createElement('div');
    comentarioPost.className = 'comentarioPost';
    let p = document.createElement('p');
    p.innerHTML = texto;
    let acoes = document.createElement('div');
    acoes.className = 'acoes';
    let curtir = document.createElement('div');
    curtir.id = 'curtir'
    let itemPost = document.createElement('div');
    itemPost.className = 'itemPost';
    let icons1 = document.createElement('i');
    icons1.className = 'itemIcon far fa-comments';
    let icons1p = document.createElement('p');
    icons1p.textContent = 'Comentar';

    let itemPost2 = document.createElement('div');
    itemPost2.className = 'itemPost';
    let icons2 = document.createElement('i');
    icons2.className = 'itemIcon fas fa-hand-holding-usd';
    let icons2p = document.createElement('p');
    icons2p.textContent = 'Ajudar';

    let itemPost3 = document.createElement('div');
    itemPost3.className = 'curtir';
    let icons3 = document.createElement('i');
    icons3.className = 'fa fa-heart-o';
    icons3.id = 'curtiu';
    let icons3p = document.createElement('p');
    icons3p.textContent = 'curtir';

    areadepost.appendChild(postagens);
    postagens.appendChild(fotoPerfil);
    postagens.appendChild(comentarioPost);
    postagens.appendChild(acoes);

    fotoPerfil.appendChild(fotoImg);
    fotoPerfil.appendChild(nomePessoa);
    nomePessoa.appendChild(h3nome);
    nomePessoa.appendChild(h3Postagem)
    fotoImg.appendChild(img)

    comentarioPost.appendChild(p);

    acoes.appendChild(curtir);
    curtir.appendChild(icons3);
    curtir.appendChild(icons3p);


    acoes.appendChild(itemPost);
    itemPost.appendChild(icons1);
    itemPost.appendChild(icons1p)
    acoes.appendChild(itemPost2);
    itemPost2.appendChild(icons2);
    itemPost2.appendChild(icons2p);


    var texto2 = document.querySelector("#getTexto");
    texto2.value = '';

    setTimeout(() => {
        var doar = document.querySelectorAll('.itemPost');
        var paragrafo = document.querySelectorAll('.itemPost p');
        var paragrafo2 = document.querySelectorAll('#curtir p');
        var icon = document.querySelectorAll('.itemIcon');
        var curtiu = document.querySelectorAll('#curtiu');
        var curtir = document.querySelectorAll('#curtir');
        var cor = true;

        for (let i = 0; i < doar.length; i++) {
            doar[i].addEventListener('mouseenter', () => {
                doar[i].style.backgroundColor = '#0070b9';
                icon[i].style.color = 'white';
                paragrafo[i].style.color = 'white';
                doar[i].style.borderRadius = '10px';
            });
        }

        for (let i = 0; i < doar.length; i++) {
            doar[i].addEventListener('mouseout', (e) => {
                icon[i].style.color = '#0070b9';
                doar[i].style.backgroundColor = 'white';
                paragrafo[i].style.color = 'black'
            })
        }

        // Gerenciando doação
        var fecharModal = document.querySelector('.fechar');
        var modal = document.querySelector('.modal')
        var ajudar = document.querySelectorAll('#ajudar');

        for (let i = 0; i < curtir.length; i++) {
            curtir[i].addEventListener('click', () => {
                curtiu[i].style.color = 'red';
            })
        }

        for (let i = 0; i < curtir.length; i++) {
            curtir[i].addEventListener('mouseenter', () => {
                curtir[i].style.backgroundColor = '#0070b9';
                curtiu[i].style.color = 'white';
                paragrafo2[i].style.color = 'white';
                curtir[i].style.borderRadius = '10px';
            });
        }

        for (let i = 0; i < curtir.length; i++) {
            curtir[i].addEventListener('mouseout', () => {
                if (curtiu[i].style.color === 'red') {
                    curtiu[i].style.color = 'red';
                    curtir[i].style.backgroundColor = 'white';
                    paragrafo2[i].style.color = 'black';
                } if (curtiu[i].style.color != 'red') {
                    curtir[i].style.backgroundColor = 'white';
                    paragrafo2[i].style.color = 'black';
                    curtiu[i].style.color = '#0070b9';
                }
            });
        }

        for (let i = 0; i < ajudar.length; i++) {
            ajudar[i].addEventListener('click', () => {
                modal.style.display = 'flex';
            })
        }

        fecharModal.addEventListener('click', () => {
            modal.style.display = 'none';
        })


    }, 1000)
})