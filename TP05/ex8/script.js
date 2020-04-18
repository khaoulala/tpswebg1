
const tab = ['-2','1','4'];

function soustrait(x){
    if (x>0 || x==0) {
        return x-2;
    }
    else{
        console.log("Nombre négatif!")
    }
}
function affiche (){
    console.log(soustrait(tab[0]));
    console.log(soustrait(tab[(tab.length)-1]));
}
affiche();