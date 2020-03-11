let nbr=Math.floor(Math.random()*100);
console.log(nbr);
var cmp=0;
let n=prompt("Entrez un nombre: ");
n=parseInt(n);
while(cmp!=4) {
    if (n>nbr){
        alert("ce nombre est supérieur!!");
        n = prompt("Entrez un nombre: ");
        n = parseInt(n);
        cmp+=1;
    }
    else if (n<nbr) {
        alert("ce nombre est inférieur!!");
        n = prompt("Entrez un nombre: ");
        n = parseInt(n);
        cmp+=1;
    }
        else{
        alert("CONGRATS!");
        }
            
}
///Méthode 2:
//--let nbr = Math.floor(Math.random() * 100);
console.log(nbr);
let n = prompt("Entrez un nombre: ");
n = parseInt(n);
while (trouver===False) {
    if (n > nbr) {
        alert("ce nombre est supérieur!!");
        n = prompt("Entrez un nombre: ");
        n = parseInt(n);
        cmp += 1;
    }
    //else if (n < nbr) {
        alert("ce nombre est inférieur!!");
        n = prompt("Entrez un nombre: ");
        n = parseInt(n);
        cmp += 1;
    }
    else {
        alert("CONGRATS!");
    }

}
