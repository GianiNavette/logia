var a = 0;
var b = 0;
function myFunction() {
 
  var e = document.getElementById("pet-select");
var value3 = e.options[e.selectedIndex].value;
var text = e.options[e.selectedIndex].text;
var d1 = document.getElementById('myList');

if ( value3 == "img") {
  b = b + 1;
  d1.insertAdjacentHTML('beforebegin', '<div class="imagediv"><'+value3+' src="logia-panorama.jpg" id="image'+b+'"><'+value3+'/></div>');
  document.getElementById('myList2').insertAdjacentHTML('beforebegin', '<div><label for="head">Image '+b+'</label><button onClick="myFunction8('+b+')" >Petite</button><button onClick="myFunction9('+b+')" >Moyenne</button><button onClick="myFunction10('+b+')" >Grande</button></div>');
} else {
  a = a + 1;
  d1.insertAdjacentHTML('beforebegin', '<'+value3+' contenteditable="true" id="'+a+'">Cliquer pour modifier<'+value3+'/>');
  
  
  
  document.getElementById('myList2').insertAdjacentHTML('beforebegin', '<div><input type="color" id="color'+a+'" name="head" onChange="myFunction2('+a+')" value="#000000"><label for="head">Couleur du texte '+a+'</label><button onClick="myFunction5('+a+')" >Gauche</button><button onClick="myFunction6('+a+')" >Centrer</button><button onClick="myFunction7('+a+')" >Droite</button></div>');
  
}
}

function myFunction2(var1) {
  
  document.getElementById(var1).style.color = document.getElementById("color" + ""+var1+"").value;
}
function myFunction3() {
  
  document.getElementById("header").style.backgroundColor = document.getElementById("headercolor").value;
}
function myFunction4() {
  
  document.body.style.backgroundColor = document.getElementById("bodycolor").value;
}
function myFunction5(var1) {
  
  document.getElementById(var1).style.textAlign = "left";
}
function myFunction6(var1) {
  
  document.getElementById(var1).style.textAlign = "center";
}
function myFunction7(var1) {
  
  document.getElementById(var1).style.textAlign = "right";
}
function myFunction8(var1) {
  
  document.getElementById("image" + ""+var1+"").style.width = "60%";
}
function myFunction9(var1) {
  
  document.getElementById("image" + ""+var1+"").style.width = "80%";
}
function myFunction10(var1) {
  
  document.getElementById("image" + ""+var1+"").style.width = "100%";
}