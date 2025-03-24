const TuneA = new Audio('tunes/a.wav');
const TuneS = new Audio('tunes/s.wav');
const TuneD = new Audio('tunes/d.wav');
const TuneF = new Audio('tunes/f.wav');
const TuneG = new Audio('tunes/g.wav');
const TuneH = new Audio('tunes/h.wav');
const TuneJ = new Audio('tunes/j.wav');
const TuneK = new Audio('tunes/k.wav');
const TuneL = new Audio('tunes/l.wav');
const TuneSC = new Audio('tunes/;.wav');
const TuneW = new Audio('tunes/w.wav');
const TuneE = new Audio('tunes/e.wav');
const TuneT = new Audio('tunes/t.wav');
const TuneY = new Audio('tunes/y.wav');
const TuneU = new Audio('tunes/u.wav');
const TuneO = new Audio('tunes/O.wav');
const TuneP = new Audio('tunes/P.wav');


let A = document.getElementById('b1_A');
let S = document.getElementById('b1_S');
let D = document.getElementById('b1_D');
let F = document.getElementById('b1_F');
let G = document.getElementById('b1_G');
let H = document.getElementById('b1_H');
let J = document.getElementById('b1_J');
let K = document.getElementById('b1_K');
let L = document.getElementById('b1_L');
let SC = document.getElementById('b1_SC');

let W = document.getElementById('b2_1');
let E = document.getElementById('b2_2');
let T = document.getElementById('b2_3');
let Y = document.getElementById('b2_4');
let U = document.getElementById('b2_5');
let O = document.getElementById('b2_6');
let P = document.getElementById('b2_7');



window.addEventListener('keydown', e =>{

    switch(e.key){
        case "a" :
        TuneA.play();
        A.style.backgroundColor = "blue";
        break;

        case "s" :
        TuneS.play();
        S.style.backgroundColor = "blue";
        break;

        case "d" :
        TuneD.play();
        D.style.backgroundColor = "blue";
        break;

        case "f" :
        TuneF.play();
        F.style.backgroundColor = "blue";
        break;

        case "g" :
        TuneG.play();
        G.style.backgroundColor = "blue";
        break;

        case "h" :
        TuneH.play();
        H.style.backgroundColor = "blue";
        break;

        case "j" :
        TuneJ.play();
        J.style.backgroundColor = "blue";
        break;

        case "k" :
        TuneK.play();
        K.style.backgroundColor = "blue";
        break;

        case "l" :
        TuneL.play();
        L.style.backgroundColor = "blue";
        break;

        case ";" :
        TuneSC.play();
        SC.style.backgroundColor = "blue";
        break;

        case "w" :
        TuneW.play();
        W.style.backgroundColor = "blue";
        break;

        case "e" :
        TuneE.play();
        E.style.backgroundColor = "blue";
        break;

        case "t" :
        TuneT.play();
        T.style.backgroundColor = "blue";
        break;

        case "y" :
        TuneY.play();
        Y.style.backgroundColor = "blue";
        break;

        case "u" :
        TuneU.play();
        U.style.backgroundColor = "blue";
        break;

        case "o" :
        TuneO.play();
        O.style.backgroundColor = "blue";
        break;

        case "p" :
        TuneP.play();
        P.style.backgroundColor = "blue";
        break;

        default:
            break;
    }
})

window.addEventListener('keyup', e => {

    switch(e.key){
        case "a" :
        A.style.backgroundColor = "white";
    
        
        break;

        case "s" :
        // TuneS.play();
        S.style.backgroundColor = "white";
        break;

        case "d" :
        TuneD.play();
        D.style.backgroundColor = "white";
        break;

        case "f" :
        TuneF.play();
        F.style.backgroundColor = "white";
        break;

        case "g" :
        TuneG.play();
        G.style.backgroundColor = "white";
        break;

        case "h" :
        TuneH.play();
        H.style.backgroundColor = "white";
        break;

        case "j" :
        TuneJ.play();
        J.style.backgroundColor = "white";
        break;

        case "k" :
        TuneK.play();
        K.style.backgroundColor = "white";
        break;

        case "l" :
        TuneL.play();
        L.style.backgroundColor = "white";
        break;

        case ";" :
        TuneSC.play();
        SC.style.backgroundColor = "white";
        break;

        case "w" :
        TuneW.play();
        W.style.backgroundColor = "Black";
        break;

        case "e" :
        TuneE.play();
        E.style.backgroundColor = "Black";
        break;

        case "t" :
        TuneT.play();
        T.style.backgroundColor = "Black";
        break;

        case "y" :
        TuneY.play();
        Y.style.backgroundColor = "Black";
        break;

        case "u" :
        TuneU.play();
        U.style.backgroundColor = "Black";
        break;

        case "o" :
        TuneO.play();
        O.style.backgroundColor = "Black";
        break;

        case "p" :
        TuneP.play();
        P.style.backgroundColor = "Black";
        break;

        default:
            break;
    }
})

let ran = document.querySelector(".range").getElementsByTagName("input")[0];
ran.addEventListener("change", (e) =>{
     TuneA.volume = parseInt(e.target.value)/100;
     TuneS.volume = parseInt(e.target.value)/100;
     TuneD.volume = parseInt(e.target.value)/100;
     TuneF.volume = parseInt(e.target.value)/100;
     TuneG.volume = parseInt(e.target.value)/100;
     TuneH.volume = parseInt(e.target.value)/100;
     TuneJ.volume = parseInt(e.target.value)/100;
     TuneK.volume = parseInt(e.target.value)/100;
     TuneL.volume = parseInt(e.target.value)/100;
     TuneS.volume = parseInt(e.target.value)/100;;
     TuneW.volume = parseInt(e.target.value)/100;
     TuneE.volume = parseInt(e.target.value)/100;
     TuneT.volume = parseInt(e.target.value)/100;
     TuneY.volume = parseInt(e.target.value)/100;
     TuneU.volume = parseInt(e.target.value)/100;
     TuneO.volume = parseInt(e.target.value)/100;
     TuneP.volume = parseInt(e.target.value)/100;

})

// let ran = document.querySelector(".range").getElementsByTagName("input")[0];
// const volume = (e) => {

//   

// }



let audio = new Audio("tunes/a.wav")

const playTune = (key) => {
    audio.src = `Tunes/${key}.wav`;
    audio.play();
   console.log(key);

    ran.addEventListener("change", (e) => {
    audio.volume = parseInt(e.target.value)/100;

    })

}

const pressedkey = (e) => {
    playTune(e.key);

}

document.addEventListener("keydown", pressedkey);