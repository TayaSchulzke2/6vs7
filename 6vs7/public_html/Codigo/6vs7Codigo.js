"use-strict";

let personatge;
let pregunta;
let robot;
let missatge;
let vida6 = 67;
let vida7 = 67;
let atacar;
let curar;
let decisio;


personatge = prompt("Qui vols ser, el 6 o el 7?");
if (personatge == "6") {
    robot = "7";
    alert("Vida:\n 6:" + vida6 + "\n 7:" + vida7);
    while (vida6 > 0 && vida7 > 0) {
        pregunta = prompt("Vols atacar o curar-te? (tot en minúscula)");
        pregunta.toLowerCase();
        pregunta.trim();
        if (pregunta == "atacar") {
            atacar =x;
            vida7 = vida7 - atacar;
            alert("Has fet " + atacar + " de vida a" + robot + "\nVida:\n 6:" + vida6 + "\n 7:" + vida7);
        } else if (pregunta == "curar") {
            curar =x;
            vida6 = vida6 + curar;
            alert("T'has curat " + curar + " de vida\nVida:\n 6:" + vida6 + "\n 7:" + vida7);
        }
        decisio = x
        if (pregunta == 1) {
            atacar =x;
            vida6 = vida6 - atacar;
            alert(robot + " t'ha fet" + atacar + " de vida.\nVida:\n 6:" + vida6 + "\n 7:" + vida7);
        } else if (pregunta == 2) {
            curar =x;
            vida7 = vida7 + curar;
            alert(robot + " s'ha curat " + curar + " de vida\nVida:\n 6:" + vida6 + "\n 7:" + vida7);
        }
    }
    if (vida6 <= 0) {
        alert("Has perdut!\n El jugador " + robot + " ha guanyat amb " + vida7 + " punts de vida");
    } else if (vida7 <= 0) {
        alert("Has guanyat!\nT'has quedat amb ha guanyat amb " + vida6 + " punts de vida");
    }

} else{
    robot = "6";
    alert("vida:\n 6:" + vida6 + "\n 7:" + vida7);
     while (vida6 > 0 && vida7 > 0) {
        pregunta = prompt("Vols atacar o curar-te? (tot en minúscula)");
        pregunta.toLowerCase();
        pregunta.trim();
        if (pregunta == "atacar") {
            atacar =x;
            vida6 = vida6 - atacar;
            alert("Has fet " + atacar + " de vida a" + robot + "\nVida:\n 6:" + vida6 + "\n 7:" + vida7);
        } else if (pregunta == "curar") {
            curar =x;
            vida7 = vida7 + curar;
            alert("T'has curat " + curar + " de vida\nVida:\n 6:" + vida6 + "\n 7:" + vida7);
        }
        decisio = x
        if (pregunta == 1) {
            atacar =x;
            vida7 = vida7 - atacar;
            alert(robot + " t'ha fet" + atacar + " de vida.\nVida:\n 6:" + vida6 + "\n 7:" + vida7);
        } else if (pregunta == 2) {
            curar =x;
            vida6 = vida6 + curar;
            alert(robot + " s'ha curat " + curar + " de vida\nVida:\n 6:" + vida6 + "\n 7:" + vida7);
        }
    }
    if (vida7 <= 0) {
        alert("Has perdut!\n El jugador " + robot + " ha guanyat amb " + vida7 + " punts de vida");
    } else if (vida6 <= 0) {
        alert("Has guanyat!\nT'has quedat amb ha guanyat amb " + vida6 + " punts de vida");
    }
}