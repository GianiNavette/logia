var a = 0;
var b = 0;
var c = 0;
var nbh1=0;
var nbh2=0;
var nbp=0;

var sideBarState=true;
function myFunction() {
    c=c+1;
    var e = document.getElementById("pet-select");
    var value3 = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;
    var d1 = document.getElementById('myList');

    switch (value3) {
        case 'img':
            b = b + 1;
            d1.insertAdjacentHTML('beforebegin', '<'+value3+' onclick="uploadImage('+b+','+c+')"; src="placeholder.jpg" id="image'+b+'"><'+value3+'/>');
            document.getElementById('myList2').insertAdjacentHTML('beforebegin', '<button id="buttonObjet'+c+'" onclick="hideOtherEl(this,'+c+',true)">Image '+b+' ˅</button><div id="objet'+c+'" style="display:block;"><input id="inputimage'+b+'" type="file" onchange="readURL(this,'+b+');" /><button onClick="myFunction8('+b+')" >Petite</button><button onClick="myFunction9('+b+')" >Moyenne</button><button onClick="myFunction10('+b+')" >Grande</button></div></div>');        
          break;
        case 'h1':
            nbh1=nbh1+1;
            a = a + 1;
            d1.insertAdjacentHTML('beforebegin', '<'+value3+' class="title" data-placeholder="Texte" onclick="clickSpecificbutton('+c+')" contenteditable="true" id="'+a+'"><'+value3+'/>');
            document.getElementById('myList2').insertAdjacentHTML('beforebegin', '<button id="buttonObjet'+c+'" onclick="hideOtherEl(this,'+c+',true)" >'+text+' '+nbh1+' ˅</button><div id="objet'+c+'" style="display:block;"><label>Couleur du texte </label><input type="color" id="color'+a+'" name="head" onChange="myFunction2('+a+')" value="#000000"><button onClick="myFunction5('+a+')" >Gauche</button><button onClick="myFunction6('+a+')" >Centrer</button><button onClick="myFunction7('+a+')" >Droite</button></div></div>');
        break;
          case 'h2':
            nbh2=nbh2+1;
            a = a + 1;
            d1.insertAdjacentHTML('beforebegin', '<'+value3+' class="title" data-placeholder="Texte" onclick="clickSpecificbutton('+c+')" contenteditable="true" id="'+a+'"><'+value3+'/>');
            document.getElementById('myList2').insertAdjacentHTML('beforebegin', '<button id="buttonObjet'+c+'" onclick="hideOtherEl(this,'+c+',true)" >'+text+' '+nbh2+' ˅</button><div id="objet'+c+'" style="display:block;"><label>Couleur du texte </label><input type="color" id="color'+a+'" name="head" onChange="myFunction2('+a+')" value="#000000"><button onClick="myFunction5('+a+')" >Gauche</button><button onClick="myFunction6('+a+')" >Centrer</button><button onClick="myFunction7('+a+')" >Droite</button></div></div>');
          break;
        case 'p':
            nbp=nbp+1;
            a = a + 1;
            d1.insertAdjacentHTML('beforebegin', '<'+value3+' class="title" data-placeholder="Texte" onclick="clickSpecificbutton('+c+')" contenteditable="true" id="'+a+'"><'+value3+'/>');
            document.getElementById('myList2').insertAdjacentHTML('beforebegin', '<button id="buttonObjet'+c+'" onclick="hideOtherEl(this,'+c+',true)" >'+text+' '+nbp+' ˅</button><div id="objet'+c+'" style="display:block;"><label>Couleur du texte </label><input type="color" id="color'+a+'" name="head" onChange="myFunction2('+a+')" value="#000000"><button onClick="myFunction5('+a+')" >Gauche</button><button onClick="myFunction6('+a+')" >Centrer</button><button onClick="myFunction7('+a+')" >Droite</button></div></div>');
          break;
        default:
          console.log(`Sorry, we are out of ${expr}.`);
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
  
  document.getElementById("image" + ""+var1+"").style.width = "40%";
}
function myFunction9(var1) {
  
  document.getElementById("image" + ""+var1+"").style.width = "70%";
}
function myFunction10(var1) {
  
  document.getElementById("image" + ""+var1+"").style.width = "100%";
}

function readURL(input,imageid) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById("image" + ""+imageid+"").src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}
function uploadImage(var1,objetId) { 
    clickSpecificbutton(objetId);
    document.getElementById("inputimage" + ""+var1+"").click(); 
} 
function clickSpecificbutton(objetId)
{
    x = document.getElementById("buttonObjet" + ""+objetId+"")
    hideOtherEl(x,objetId,false);
    
}
function sidebutton(x){
    
    if(sideBarState==true){
        document.getElementById("sidenav").style.width = "50px";
        document.getElementById("sidenav").style.height = "45px";
        
        document.getElementById("main").style.marginLeft = "0px";
        sideBarState=false;
    } else {
        document.getElementById("sidenav").style.width = "200px";
        document.getElementById("sidenav").style.height = "100vh";
        document.getElementById("main").style.marginLeft = "200px";
        sideBarState=true;
    }
    x.classList.toggle("change");
}

function hideOtherEl(buttontext,objetId,bool) {

    let str = buttontext.innerHTML
    str = str.slice(0, -1); 
    
    var x = document.getElementById("objet" + ""+objetId+"");
  if (x.style.display === "none") {
    
    x.style.display = "block";
    buttontext.innerHTML = str +"˅";
  } else {
    if (bool==true){
        x.style.display = "none";
        buttontext.innerHTML = str +"˄";
    }  
    
  }

}