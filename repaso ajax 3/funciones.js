function loadDoc1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		$("document").backgroundImage="rn.gif"
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
function checkUsu(nm){
	var usu= $("usu").value;
	if(usu.length<3){
		$("np").innerHTML="nombre usuario demasiado corto";
	}else{
		if(usu==nm){
			$("np").innerHTML="nombre usuario no disponible";
		}else{
			$("np").innerHTML="nombre usuario disponible";
		}
	}
}
function loadDoc2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		$("document").backgroundImage="rn.gif"
    }
  };
  xhttp.open("GET", "ajax2.txt", true);
  xhttp.send();
}
$("usu").focus=loadDoc();