/*/import{ FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import{ trash } from '@fortawesome/free-solid-svg-icons';
//import{ edit } from '@fortawesome/free-solid-svg-icons';
console.log('test');

function click(event) {
    event.preventDefault();
console.log('bonjour1');
    var id=0;
    JQuery('#nv_ligne > tbody:last').append('<tr>id+1</tr><tr>document.getElementById("prenom")</tr><tr>document.getElementById("nom")</tr><tr>document.getElementById("email")</tr><tr> <FontAwesomeIcon icon={edit}></FontAwesomeIcon> </tr><tr> <FontAwesomeIcon icon={trash}></FontAwesomeIcon> </tr>');
console.log('bonjour2');
};
console.log('teeeeest');
*/
console.log('aaa');
 function click(event) {
     event.preventDefault();
     console.log("heeeeey");
     var prenom= document.querySelector('#prenom').value;
     var nom= document.querySelector('#nom').value;
     var mail= document.querySelector('#exampleInputEmail1').value;
  
     var table= document.getElementsByTagName ('table')[0];//
     var newrow= table.insertRow(table.rows.length);//nv ligne

     var cel1= newrow.insertCell(0);//les célulles
     var cel2= newrow.insertCell(1);
     var cel3= newrow.insertCell(2);
     var cel4= newrow.insertCell(3);
     var cel5= newrow.insertCell(4);
     var cel6= newrow.insertCell(5);
     
     var idd= 0;
     //mon affichege dans les célulles 
     cel1.innerHTML= idd+1;
     cel2.innerHTML= prenom;
     cel3.innerHTML= nom;
     cel4.innerHTML= mail;
     //cel5.innerHTML= <FontAwesomeIcon  icon={edit}></FontAwesomeIcon>;
     //cel6.innerHTML= <FontAwesomeIcon  icon={trash}></FontAwesomeIcon>;
 }


