//slider value para corrente 
function getSliderValue_corrente(){
	var corrente = document.getElementById("rangecorrente").value;
	var tensao = getRadioCheckedValue("radiotensao");
 	var fpot = document.getElementById("saidafpot").innerHTML;
	var fat = getFat(getRadioCheckedValue("radioncond"));
	var queda = getQueda();
	var kva = fat*tensao*corrente/1000;
	var kw = fat*tensao*corrente*fpot/1000;
	document.getElementById("saidacorrente").innerHTML = corrente;
	document.getElementById("saidakva").innerHTML = kva.toFixed(1);
    document.getElementById("saidapotw").innerHTML = kw.toFixed(1);
    document.getElementById("saidaqueda").innerHTML = queda.toFixed(2);
}
//slider value para fp
function getSliderValue_fpot(){
	var fpot = document.getElementById("rangefpot").value;
	var kva = document.getElementById("saidakva").innerHTML;
	var kw = fpot*kva;
	document.getElementById("saidafpot").innerHTML = fpot;
    document.getElementById("saidapotw").innerHTML = kw.toFixed(2);
}
//slider value para comprimento
function getSliderValue_comprimento(){
	var comprimento = document.getElementById("rangecomprimento").value;
	document.getElementById("saidacomprimento").innerHTML = comprimento;
	var queda = getQueda();
	document.getElementById("saidaqueda").innerHTML = queda.toFixed(2);
}
function getQueda(){
	var comprimento = document.getElementById("rangecomprimento").value;
	var tensao = getRadioCheckedValue("radiotensao");
	var corrente = document.getElementById("rangecorrente").value;
	var material = getRadioCheckedValue("radiomaterial");
	var cabo = document.getElementById("selectcabo").value;
	var fat = getFat(getRadioCheckedValue("radioncond"));
	var fat2 = 2;
	if (fat != 1){ fat2 = fat; }
	var resistividade = getResistividade(material);
	var queda = resistividade*(comprimento/cabo)*(corrente/tensao)*fat2*100;
	return queda;
}
function getResistividade(materialcabo){
	var resist = 0;
	switch(materialcabo) {
	case "Cobre":
		resist=0.0173;
		break;
	case "Alumínio":
		resist=0.0278;
		break;
	default:
	resist=99;
	break;
}	

	return resist; 	
}
function getFat(ncond){
	if(ncond>2){ fat=Math.sqrt(3);}
	else{ fat = 1;}
	return fat;
}
function setCorrenteMax(correntemax){
	document.getElementById("rangecorrente").max = correntemax;
	document.getElementById("rangecorrente").value = correntemax; 
	getSliderValue_corrente();
}
function setCompMax(compmax){
	document.getElementById("rangecomprimento").max = compmax;
	document.getElementById("rangecomprimento").value = compmax; 
	getSliderValue_comprimento();
}
function getRadioCheckedValue(radio_name){
   var oRadio = document.forms[0].elements[radio_name];
    for(var i = 0; i < oRadio.length; i++){
      if(oRadio[i].checked){
         return oRadio[i].value;}
   }
  return '';
}

function calcula(){

	var I = document.getElementById("saidacorrente").value;
	var L = document.getElementById("saidacomprimento").value;
 	var tensao = getRadioCheckedValue("radiotensao");
	var ncond = getRadioCheckedValue("radioncond");
	var material = getRadioCheckedValue("radiomaterial");
	var listacabo = document.getElementById("selectcabo");
	var cabo = listacabo.options[listacabo.selectedIndex].value;
	var fat=0;
	var p=0;
	var queda=0;

	if(ncond>2){
		fat=Math.sqrt(3);}
	else{
			fat = 2;
	}
//	switch(ncond) {
//    		case 3:
//        		//fat = math.sqrt(3);
//        		break;
//    		case 2:
//        		fat = 2;
//        		break;
//    		default:
//			fat=4;
//			break;
//	}
	switch(material) {
    		case "Cobre":
        		p=0.0173;
        		break;
    		case "Alumínio":
        		p=0.0278;
        		break;
    		default:
			p=99;
			break;
	}

	//document.getElementById("teste").innerHTML = ncond+" "+fat+" "+material+" "+p+" "+queda;
	//document.getElementById("teste2").innerHTML = I+" "+tensao+" "+ncond+" "+material+" "+L+" "+cabo;
	
	queda =100*p*(L/cabo)*fat*I/tensao;
	document.getElementById("queda").innerHTML = queda.toFixed(2)+" %"+" "+p+" "+" "+fat+" "+" "+I+" "+tensao+" "+ncond+" "+material+" "+L+" "+cabo;
	//document.getElementById("queda").innerHTML = "dV% = "+queda.toFixed(2)+" %";
		
	
}



