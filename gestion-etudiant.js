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

 // verif mail
 var table= document.getElementsByTagName ('table')[0];//
function verifmail(mail) {
    var nbrows=table.rows.length;
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    for (let index = 0; index < nbrows; index++) {
        var email_list= table.getElementsByTagName ('tr')[index].cells[3].innerHTML;
        if (email_list ==mail) {
            return false;
        }
    }
}
//
function verif() {
    var mail= document.querySelector('#exampleInputEmail1').value;
    if (verifmail(mail) ==false) {
        $('#erreur').show();//  show pour afficher
        $('#erreur').html('le mail existe déja');
    }else {
        ajout();
        $('#erreur').hide();// hide pour caché
        console.log('ajout')
    }
}

//ajout d'une ligne
var idd= 0;
console.log('aaa');
 function ajout() {
     console.log("heeeeey");
     var prenom= document.querySelector('#prenom').value;
     var nom= document.querySelector('#nom').value;
     var mail= document.querySelector('#exampleInputEmail1').value;
  
     var table= document.getElementsByTagName ('table')[0];//
     var newrow= table.insertRow(table.rows.length);//nv ligne
//les célulles
     var cel1= newrow.insertCell(0);
     var cel2= newrow.insertCell(1);
     var cel3= newrow.insertCell(2);
     var cel4= newrow.insertCell(3);
     var cel5= newrow.insertCell(4);
     var cel6= newrow.insertCell(5);
//mon affichege dans les célulles 
var compteur=table.rows.length-1;
     cel1.innerHTML= compteur;
     cel2.innerHTML= prenom;
     cel3.innerHTML= nom;
     cel4.innerHTML= mail;
     cel5.innerHTML= '<i class="bi bi-pencil-square" id="'+compteur+'"onclick="modif(this);"></i>';//icone bootsrap
     cel6.innerHTML= '<i class="bi bi-trash"id="'+compteur+'"onclick="supprimer(this);"></i>';
//vider les input apres l'ajout je lui donne un evaleur vide
   $('input').val('');
 }
function modif(params) {
    console.log(params.id);
    var table= $('.table tr')[params.id];//id compteur dans <i>
    $('#prenom').val($(table.cells[1]).text());
    $('#nom').val($(table.cells[2]).text());
    $('#exampleInputEmail1').val($(table.cells[3]).text());
    $(params).closest('tr').remove();


}
function supprimer(params) {
    $(params).closest('tr').remove();
}
