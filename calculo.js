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
	var fat, p, queda;

	switch(ncond) {
    		case 3:
        		fat = sqrt(3);
        		break;
    		case 2:
        		fat = 2;
        		break;
    		default:
	}
//	if(material=="Cobre"){
//		p=0.0173;
//	}
//	else if(material=="Alumínio"){
//		p=0.0278;
//	}
	
	document.getElementById("queda").innerHTML = fat;
	
}

function getRadioCheckedValue(radio_name){
   var oRadio = document.forms[0].elements[radio_name];
    for(var i = 0; i < oRadio.length; i++){
      if(oRadio[i].checked){
         return oRadio[i].value;}
   }
  return '';
}


