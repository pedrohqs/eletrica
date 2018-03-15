//slider value para corrente 
function getSliderValue_corrente(id, saida){
	var slider = document.getElementById(id);
	var output = document.getElementById(saida);
 	var tensao = 0;
 	var fpot = 0;
	var ncond = 0;
	var fat = 0;
	var kva = 0;
	var kw = 0;
	//output.value = slider.value; // Display the default slider value
	// Update the current slider value (each time you drag the slider handle)
	slider.oninput = function() {
		ncond = getRadioCheckedValue("radioncond");
		if(ncond>2){ fat=Math.sqrt(3);}
		else{ fat = 1;}
		tensao = getRadioCheckedValue("radiotensao");
		fpot = document.getElementById("saidafpot").value;
		kva = fat*tensao*this.value/1000;
		kw = fat*tensao*this.value*fpot/1000;
		output.value = this.value;
	    document.getElementById("rangekva").value = kva.toFixed(1);	
	    document.getElementById("saidakva").value = kva.toFixed(1);
	    document.getElementById("rangepotw").value = kw.toFixed(1);
	    document.getElementById("saidapotw").value = kw.toFixed(1);
	}
}
//slider value para fp
function getSliderValue_fpot(id, saida){
	var slider = document.getElementById(id);
	var output = document.getElementById(saida);
	var kva = 0;
	var kw = 0;

	//output.value = slider.value; // Display the default slider value
	// Update the current slider value (each time you drag the slider handle)
	slider.oninput = function() {
		kva = document.getElementById("saidakva").value;
		kw = this.value*kva;
		output.value = this.value;
	    document.getElementById("rangepotw").value = kw.toFixed(1);
	    document.getElementById("saidapotw").value = kw.toFixed(1);
	}
}
//slider value para kva 
function getSliderValue_kva(id, saida){
	var slider = document.getElementById(id);
	var output = document.getElementById(saida);
 	var tensao = 0;
 	var fpot = 0;
	var ncond = 0;
	var fat = 0;
	var kw = 0;
	var corrente = 0;
	//output.value = slider.value; // Display the default slider value
	// Update the current slider value (each time you drag the slider handle)
	slider.oninput = function() {
		ncond = getRadioCheckedValue("radioncond");
		if(ncond>2){ fat=Math.sqrt(3);}
		else{ fat = 1;}
		tensao = getRadioCheckedValue("radiotensao");
		fpot = document.getElementById("saidafpot").value;
		kw = this.value * fpot;
		corrente = 1000 * this.value/(fat * tensao); 
		output.value = this.value;
	    document.getElementById("rangecorrente").value = corrente;	
	    document.getElementById("saidacorrente").value = corrente.toFixed(1);
	    document.getElementById("rangepotw").value = kw.toFixed(1);
	    document.getElementById("saidapotw").value = kw.toFixed(1);
	}
}
//slider value generico
function getSliderValue(id, saida){
	var slider = document.getElementById(id);
	var output = document.getElementById(saida);
	var a;
	output.value = slider.value; // Display the default slider value

	// Update the current slider value (each time you drag the slider handle)
	slider.oninput = function() {
	    output.value = this.value;
	    
	}
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



