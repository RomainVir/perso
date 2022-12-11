let cases = [...document.getElementsByClassName("case")];
let joueur = document.getElementById("joueur");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let draw = document.getElementById("draw");

let state = {
    joueurEnCours : 1,
    scoreJ1: 0,
    scoreJ2: 0,
    drawGames: 0,
    c1:0,
    c2:0,
    c3:0,
    c4:0,
    c5:0,
    c6:0,
    c7:0,
    c8:0,
    c9:0,
};

const resetState = () => {
    joueurEnCours = 1;
    state.c1 = 0;
    state.c2 = 0;
    state.c3 = 0;
    state.c4 = 0;
    state.c5 = 0;
    state.c6 = 0;
    state.c7 = 0;
    state.c8 = 0;
    state.c9 = 0;
}
const verifierVictoire = () =>{
    if(
        (state.c1 == state.c2 && state.c2 == state.c3 && state.c1 >0) ||
        (state.c1 == state.c4 && state.c4 == state.c7 && state.c1 >0) ||
        (state.c1 == state.c5 && state.c5 == state.c9 && state.c1 >0) ||
        (state.c2 == state.c5 && state.c5 == state.c9 && state.c2 >0) ||
        (state.c3 == state.c6 && state.c6 == state.c9 && state.c3 >0) ||
        (state.c4 == state.c5 && state.c5 == state.c6 && state.c4 >0) ||
        (state.c7 == state.c8 && state.c8 == state.c9 && state.c7 >0)
    ) {
        return true;
    } else if (
        state.c1 != 0 &&
        state.c2 != 0 &&
        state.c3 != 0 &&
        state.c4 != 0 &&
        state.c5 != 0 && 
        state.c6 != 0 &&
        state.c7 != 0 &&
        state.c8 != 0 &&
        state.c9 != 0
    ) {
        return null;
    } else {
        return false;
    } }

const jouerCase = (e) => {
    let idCase = e.target.id // cibler la case du click
    if(state[idCase] != 0)// verifier que la case cliquee n´est pas deja jouee
    return;

    state[idCase] = state.joueurEnCours; // on passe lid de la case jouee a l id du joueur en cours
    
    let isVictoire = verifierVictoire();
    
    if(isVictoire === true){
        alert("The winner is " + state.joueurEnCours);
        if(state.joueurEnCours == 1){
            state.scoreJ1++
            score1.textContent = state.scoreJ1
        } else {
            state.scoreJ2++
            score1.textContent = state.scoreJ2
        }
        resetState();
        cases.forEach((c) => (c.textContent = ""));
    } else if(isVictoire === null) {
        alert("Draw");
        state.drawGames++; 
        draw.textContent = state.drawGames;
        resetState();
        cases.forEach((c) => (c.textContent = ""));
    } else if(isVictoire === false){
        if(state.joueurEnCours === 1) {
            e.target.textContent = "X"
            state.joueurEnCours = 2;
            joueur.textContent = "2"
           
        } else {
            e.target.textContent = "O"
            state.joueurEnCours = 1;
            joueur.textContent = "1"
        }
    }
};
cases.forEach((el) => {
    el.addEventListener("click", jouerCase)
});