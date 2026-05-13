"use-strict";

let personatge; 
let pregunta;
let robot;
let missatge; 
let vida6=67;
let vida7=67;
let atacar;
let curar;
let decisio;


personatge= prompt("Qui vols ser, el 6 o el 7?"); 
if(personatge == "6"){
    robot="7";
    alert("Vida:\n 6:"+vida6+"\n 7:"+vida7);
    while(vida6>=0&&vida7>=0){
    pregunta=prompt("Vols atacar o curar-te? (tot en minúscula)");
    pregunta.toLowerCase();
    pregunta.trim();
    if (pregunta=="atacar"){
        atacar=
        vida7=vida7-atacar;
        alert("Has fet "+atacar+" de vida a"+robot+"\nVida:\n 6:"+vida6+"\n 7:"+vida7);
    }else if(pregunta=="curar"){
        curar=
        vida6=vida6+curar;
        alert("T'has curat "+curar+" de vida\nVida:\n 6:"+vida6+"\n 7:"+vida7);
    }
    decisio=x
    if (pregunta==1){
        atacar=
        vida6=vida6-atacar;
        alert(robot+" t'ha fet"+atacar+" de vida.\nVida:\n 6:"+vida6+"\n 7:"+vida7);
    }else if(pregunta=="curar"){
        curar=
        vida7=vida7+curar;
        alert(robot+" s'ha curat "+curar+" de vida\nVida:\n 6:"+vida6+"\n 7:"+vida7);
    }}
    
}else{
    robot= "6"; 
     alert("vida:\n 6:"+vida6+"\n 7:"+vida7);
}