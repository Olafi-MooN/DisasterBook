// Buscando dados de uma api 
var dadosCovid;

fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil')    
    .then((res) => { return res.json() })
    .then(cities => { dadosCovid = cities });


setTimeout(() => {

    var pais = document.querySelector('#pais');
    pais.value = dadosCovid.data.country;
    var cases = document.querySelector('#confirmados');
    cases.value = dadosCovid.data.confirmed;
    var mortes = document.querySelector('#mortes');
    mortes.value = dadosCovid.data.deaths;
    var recuperados = document.querySelector('#recuperados');
    recuperados.value = dadosCovid.data.recovered;
},2000)


