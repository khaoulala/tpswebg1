function Member(name,id,grade){
    this.name=name;
    this.id=id;
    this.grade=grade;
    this.toString(){
        let str="";
        return str;
    }
}
function Team(name,id){
    this.name= name;
    this.id = id;
    this.members = new Array();
    this.addMember=function(m){
        this.members.push(m);
    }
}

 
var m1 =new Member("Rabab", 1, "A");
var m2 =new Member("Rajaa", 2, "C");
var m3 =new Member("Ahmed", 3, "B");
var m4 =new Member("Salah", 4, "F");
 
