"use-strict";

let personatge; 
let pregunta;
let robot;
let missatge; 
let vida6=67;
let vida7=67;
let atacar;
let curar;


personatge= prompt("Qui vols ser, el 6 o el 7?"); 
if(personatge == "6"){
    robot="7";
    alert("vida:\n 6:"+vida6+"\n 7:"+vida7);
    pregunta=prompt("Vols atacar o curar-te? (tot en minúscula)");
    pregunta.toLowerCase();
    pregunta.trim();
    if (pregunta=="atacar"){
        atacar=
        vida7=vida7-atacar;
    }else if(pregunta=="curar"){
        
    }else{
        
    }
    
}else{
    robot= "6"; 
     alert("vida:\n 6:"+vida6+"\n 7:"+vida7);
}