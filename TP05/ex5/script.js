
function Member(id,name,grade){
    this.id=id;
    this.name=name;
    this.grade=grade;
    this.toString = function() {
            return "ID: "+this.id+", Name: "+this.name+", Grade: "+this.grade;
          }
    }

    function team() {
        this.members  = new Array();
        this.add = function(member) {
          var indice = this.members.length;
          this.members[indice] = member;
          return indice;
    }
    this.toString= function(){
        return this.members.join("\n");
    }
}
var Team = new team();
 
Team.add(new member(1, "Rabab", "A"));
Team.add(new member(2, "Rajaa", "C"));
Team.add(new member(3, "Ahmed", "B"));
Team.add(new member(4, "Salah", "F"));

 
document.writeln(Team);


