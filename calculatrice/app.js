//DOM

const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');
 
document.addEventListener("keydown", (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur)
})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
});


//CALCUL

const calculer = (valeur) => {
    if(listeKeycode.includes(valeur))  {//on bloque les autres touches du clavier
        switch (valeur){
            case '8':
                ecran.textContent = ""; // on efface l´ecran en mettant texte vide
                break;
            case '13':
                const calcul = eval(ecran.textContent)    // evaluer ce qu´il y a dans lecran au moment ou on appuie sur =
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;

        
        }
    }
}

window.addEventListener('error', (e) => {
    alert("Une erreur est survenue dans votre calcul ")
})