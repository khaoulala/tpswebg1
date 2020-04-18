const a = 3;
const b = 2;

function multiplie (x = 8){
    return x*3;
}

function affiche (){
    console.log(multiplie(a));
    console.log(multiplie(b));
    console.log(multiplie());
}
affiche();