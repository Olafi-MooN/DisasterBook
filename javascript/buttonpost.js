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

