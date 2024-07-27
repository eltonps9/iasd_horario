function horas() {
    var data = new Date();
    var hr = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();
    var dia = data.getDate();
    var day = data.getDay();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    var meses = eval(mes + 1);

    var body = document.querySelector('body');
    var dataHTML = document.querySelector('#data');
    var logo = document.querySelector('#logo');
    var hora = document.querySelector("#hora");
    var minuto = document.querySelector("#minuto");
    var segundo = document.querySelector("#segundo");
    var horario = document.querySelectorAll(".horario");
    var diaFeira = document.querySelector(".diaFeria");
    var EscolaSabatina = document.querySelector(".mensagem");
    
   diaFeira.innerHTML = "ok";
EscolaSabatina.innerHTML= "sabatina";

    // depois das 18:00 a cor do fundo mudara e voltará ao normal depois das 6:00.
    if (hr >= 18 || hr < 6) {
        body.style.backgroundColor = 'black';
        dataHTML.style.color = 'white';
        logo.style.color = 'white';
    }

    //sempre que os dias ou hora for menor que 10, adicionara um "0" a frente.
    if (seg < 10) { seg = `0${seg}` }
    if (min < 10) { min = `0${min}` }
    if (hr < 10) { hr = `0${hr}` }
    if (dia < 10) { dia = `0${dia}` }
    if (meses < 10) { meses = `0${meses}` }
    if (ano < 10) { ano = `0${ano}` }

    //horario mudara de cor no sábado depois das 11:45, e voltará ao normal depois de 12:00.
    if (hr == 11 && min >= 35 && day == 6) { horario.style.color = 'red'; }

    // mostara o dia atual
    switch (day) {
            case 0:
                diaFeira.innerHTML = "Domingo";
                break;
            case 1:
                diaFeira.innerHTML = "Segunda-feira";
                break;
            case 2:
                diaFeira.innerHTML = "Terça-feira";
                break;
            case 3:
                diaFeira.innerHTML = "Quarta-feira";
                break;
            case 4:
                diaFeira.innerHTML = "Quinta-feira";
                break;
            case 5:
                diaFeira.innerHTML = "Sexta-feira";
                break;
            case 6:
                diaFeira.innerHTML = "Sábado";
                if (hr == 9 && min >= 10 ) { EscolaSabatina.innerHTML = "Lição da Escola Sabatina" }
                // if (hr == 10 && min >= 5 ) { playAudio.style.play; }
                break;
        }
    // adicionando data e hora no html.
    hora.innerHTML = `${hr}`;
    minuto.innerHTML = `${min}`;
    segundo.innerHTML = `${seg}`;
    dataHTML.innerHTML = `${dia}/` + `${meses}/` + `${ano}`;
}

setInterval(horas, 1000);
