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
            document.getElementById('myList2').insertAdjacentHTML('beforebegin', '<div><button id="buttonObjet'+c+'" onclick="hideOtherEl(this,'+c+',true)">Image '+b+' ˅</button><button class="btn" onClick="removeEl(this,'+b+','+c+',2)"><i class="fa fa-trash"></i></button></div><div id="objet'+c+'" style="display:block;"><input id="inputimage'+b+'" type="file" onchange="readURL(this,'+b+');" /><input type="range" min="1" max="100" step="1" value="40" oninput="changeSize(this.value,'+b+')" onchange="changeSize(this.value,'+b+')"><p class="settingp" id="valSizeImg'+b+'" >40%</p></div></div>');        
          break;
        case 'h1':
            nbh1=nbh1+1;
            a = a + 1;
            d1.insertAdjacentHTML('beforebegin', '<'+value3+' class="title" data-placeholder="Texte" onclick="clickSpecificbutton('+c+')" contenteditable="true" id="'+a+'">Texte<'+value3+'/>');
            document.getElementById('myList2').insertAdjacentHTML('beforebegin', '<div><button id="buttonObjet'+c+'" onclick="hideOtherEl(this,'+c+',true)" >'+text+' '+nbh1+' ˅</button><button class="btn" onClick="removeEl(this,'+a+','+c+',1)"><i class="fa fa-trash"></i></button></div><div id="objet'+c+'" style="display:block;"><label>Couleur du texte </label><input type="color" id="color'+a+'" name="head" onChange="myFunction2('+a+')" value="#000000"><button onClick="myFunction5('+a+')" >Gauche</button><button onClick="myFunction6('+a+')" >Centrer</button><button onClick="myFunction7('+a+')" >Droite</button></div></div>');
            break;
          case 'h2':
            nbh2=nbh2+1;
            a = a + 1;
            d1.insertAdjacentHTML('beforebegin', '<'+value3+' class="title" data-placeholder="Texte" onclick="clickSpecificbutton('+c+')" contenteditable="true" id="'+a+'">Texte<'+value3+'/>');
            document.getElementById('myList2').insertAdjacentHTML('beforebegin', '<div><button id="buttonObjet'+c+'" onclick="hideOtherEl(this,'+c+',true)" >'+text+' '+nbh1+' ˅</button><button class="btn" onClick="removeEl(this,'+a+','+c+',1)"><i class="fa fa-trash"></i></button></div><div id="objet'+c+'" style="display:block;"><label>Couleur du texte </label><input type="color" id="color'+a+'" name="head" onChange="myFunction2('+a+')" value="#000000"><button onClick="myFunction5('+a+')" >Gauche</button><button onClick="myFunction6('+a+')" >Centrer</button><button onClick="myFunction7('+a+')" >Droite</button></div></div>');
            break;
        case 'p':
            nbp=nbp+1;
            a = a + 1;
            d1.insertAdjacentHTML('beforebegin', '<'+value3+' class="title" data-placeholder="Texte" onclick="clickSpecificbutton('+c+')" contenteditable="true" id="'+a+'">Texte<'+value3+'/>');
            document.getElementById('myList2').insertAdjacentHTML('beforebegin', '<div><button id="buttonObjet'+c+'" onclick="hideOtherEl(this,'+c+',true)" >'+text+' '+nbh1+' ˅</button><button class="btn" onClick="removeEl(this,'+a+','+c+',1)"><i class="fa fa-trash"></i></button></div><div id="objet'+c+'" style="display:block;"><label>Couleur du texte </label><input type="color" id="color'+a+'" name="head" onChange="myFunction2('+a+')" value="#000000"><button onClick="myFunction5('+a+')" >Gauche</button><button onClick="myFunction6('+a+')" >Centrer</button><button onClick="myFunction7('+a+')" >Droite</button></div></div>');
            break;
        case 'colonne2':
            d1.insertAdjacentHTML('beforebegin', '<div class="colonne2"><div><select onchange="addEltodiv(this)" ><option value="h2p" >Titre secondaire + Paragraphe</option><option value="divp" >Paragraphe</option><option value="divimg" >image</option></select></div><div><select><option value="h2p" >Titre secondaire + Paragraphe</option><option value="divp" >Paragraphe</option><option value="divimg" >image</option></select></div></div>');
            break;    
        default:
          console.log(`Easter Eggs`);
      }


}
function addEltodiv(x){
    c = + 1;
    switch(x.value) {
        case 'divimg':
            b = b + 1;
            x.insertAdjacentHTML('beforebegin','<img onclick="uploadImage('+b+','+c+')"; src="placeholder.jpg" id="image'+b+'"><img/>' );
            document.getElementById('myList2').insertAdjacentHTML('beforebegin', '<div><button id="buttonObjet'+c+'" onclick="hideOtherEl(this,'+c+',true)">Image '+b+' ˅</button><button class="btn" onClick="removeEl(this,'+b+','+c+',2)"><i class="fa fa-trash"></i></button></div><div id="objet'+c+'" style="display:block;"><input id="inputimage'+b+'" type="file" onchange="readURL(this,'+b+');" /><input type="range" min="1" max="100" step="1" value="40" oninput="changeSize(this.value,'+b+')" onchange="changeSize(this.value,'+b+')"><p class="settingp" id="valSizeImg'+b+'" >40%</p></div></div>');
            break;
    default:

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
function changeSize(valueslide,var1) {
    document.getElementById("valSizeImg" + ""+var1+"").innerHTML = valueslide + "%";
    document.getElementById("image" + ""+var1+"").style.width = valueslide + "%";


    
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
function changefontSize(selectTag,tagNamevar) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    
    var x = document.getElementsByTagName(tagNamevar);
    
    var i;
    for (i = 0; i < x.length; i++) {
        if(x[i].className === 'settingp') {


        } else {
            x[i].style.fontSize = listValue;
        }
      
    }
}

function toggleMainSetting(buttontext) {

    let str = buttontext.innerHTML
    str = str.slice(0, -1); 
    
    var x = document.getElementById("reglageprincipal");

  if (x.style.display === "none") {
    
    x.style.display = "block";
    buttontext.innerHTML = str +"˅";
  } else {
        x.style.display = "none";
        buttontext.innerHTML = str +"˄";
    }  
    
  

}
function removeEl(trashbutton,contentId,objetId,textorimage) {
    if (textorimage == '1') {
        var mycontobj = document.getElementById(contentId);
    } else {
        var mycontobj = document.getElementById("image"+""+contentId+"");
    }
    
    var mysettingobj = document.getElementById("buttonObjet"+""+objetId+"");
    var mysettingcontentobj = document.getElementById("objet"+""+objetId+"");
    trashbutton.remove();
    mycontobj.remove();
    mysettingobj.remove();
    mysettingcontentobj.remove();
}

