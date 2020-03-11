function somme(a){
    var s=0;
    console.log(a);
    for(let i=0;i<a.length;i++){
        s+=a[i];
    }

    return s;
}

var a=new Array();
b=0;
while(!(isNaN(b))) {
    var b=prompt("Entrez un nombre: ");
    b=parseInt(b);
    console.log(b);
    if(! isNaN(b)) a.push(b);
    b+=1;
}
console.log(somme(a));
