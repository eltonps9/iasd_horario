function horas(){
	var data=new Date();
	var hr = data.getHours();
	var min = data.getMinutes();
	var seg = data.getSeconds();
	var dia= data.getDate();
	var mes= data.getMonth();
	var day= data.getDay();
	var body= document.querySelector('body');
	var dataHTML =document.querySelector('#data');
	var logo =document.querySelector('#logo');
	var horario=document.querySelector("#hrs");
	var meses = eval(mes+1);
	
	if(hr==11 && min>=45 && day==6){ document.querySelector('#hrs').style.color='red'; }
	
	if(hr>=18 || hr<6 ){ 
	body.style.backgroundColor='black';
	dataHTML.style.color='white';
	logo.style.color='white';
 	}

	if(seg<10){seg = `0${seg}`}
	if(min<10){min = `0${min}`}
	if(hr<10){hr = `0${hr}`}
	if(dia<10){dia = `0${dia}`}
	if(meses<10){meses = `0${meses}`}
	if(ano<10){ano = `0${ano}`}
	
	horario.innerHTML=`${hr}:`+`${min}:`+`${seg}`;
	dataHTML.innerHTML=`${dia}/`+`${meses}/`+`${ano}`;
}

setInterval(horas,1000);
