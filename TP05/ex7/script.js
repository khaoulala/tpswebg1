
const tab = ['-2','1','4'];

function additionne(x){
    return x*2;
}
function affiche (){
    console.log(additionne(tab[0]));
    console.log(additionne(tab[tab.length-1]));
}
affiche();