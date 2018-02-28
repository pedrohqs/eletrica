function calcula(){
	//var I;
	//I = document.getElementById("corrente").value;
	//L= document.getElementById("comprimento").value;
	//ncond= document.getElementById("ncond").value;
	//var frm = document.getElementById("myform");
	//var tensao = frm.elements[tensao];
    	//var text = "";
    //var i;
    //for (i = 0; i < frm.length ;i++) {
    //   text += frm.elements[i].name + "<br>";
   //}
	var I = document.getElementById("corrente").value;
	var L = document.getElementById("comprimento").value;
 	var tensao = getRadioCheckedValue("tensao");
	var ncond = getRadioCheckedValue("ncond");
	var material = getRadioCheckedValue("material");
	var listacabo = document.getElementById("cabo");
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

	document.getElementById("teste").innerHTML = ncond+" "+fat+" "+material+" "+p+" "+queda;
	document.getElementById("teste2").innerHTML = I+" "+tensao+" "+ncond+" "+material+" "+L+" "+cabo;
	
	queda =100*p*(L/cabo)*fat*I/tensao,2;
	document.getElementById("queda").innerHTML = "dV% = "+queda.toFixed(2)+" %";
		
	
}

function getRadioCheckedValue(radio_name){
   var oRadio = document.forms[0].elements[radio_name];
    for(var i = 0; i < oRadio.length; i++){
      if(oRadio[i].checked){
         return oRadio[i].value;}
   }
  return '';
}
