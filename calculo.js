//slider value para corrente 
function getSliderValue_corrente(){
	var corrente = document.getElementById("rangecorrente").value;
	var tensao = getRadioCheckedValue("radiotensao");
 	var fpot = document.getElementById("saidafpot").innerHTML;
	var ncond = 0;
	var fat = getFat(getRadioCheckedValue("radioncond"));
	var kva = fat*tensao*corrente/1000;
	var kw = fat*tensao*corrente*fpot/1000;
	document.getElementById("saidacorrente").innerHTML = corrente;
	document.getElementById("saidakva").innerHTML = kva.toFixed(1);
    document.getElementById("saidapotw").innerHTML = kw.toFixed(1);
}
//slider value para fp
function getSliderValue_fpot(){
	var fpot = document.getElementById("rangefpot").value;
	var kva = document.getElementById("saidakva").innerHTML;
	var kw = fpot*kva;
	document.getElementById("saidafpot").innerHTML = fpot;
    document.getElementById("saidapotw").innerHTML = kw.toFixed(1);
}
function getFat(ncond){
	if(ncond>2){ fat=Math.sqrt(3);}
	else{ fat = 1;}
	return fat;
}
function correnteMax(correntemax){
	document.getElementById("rangecorrente").max = correntemax;
	document.getElementById("rangecorrente").value = correntemax; 
	document.getElementById("saidacmax").innerHTML = correntemax;
	getSliderValue_corrente();
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



