let nomeHeroi = "Pablo";
let xpHeroi = 100000;

function verificaXp(){
    if (xpHeroi <= 1000){
        console.log("O Herói de nome " + nomeHeroi + " está no nivel de Ferro" );
    }
    else if (xpHeroi > 1001 && xpHeroi <= 2000) {
        console.log("O Herói de nome " + nomeHeroi + " está no nivel de Bronze"  );
    }
    else if (xpHeroi > 2001 && xpHeroi <= 5000) {
        console.log("O Herói de nome " + nomeHeroi + " está no nivel de Prata"  );
}
else if (xpHeroi > 5001 && xpHeroi <= 7000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nivel de Ouro"  );
}
else if (xpHeroi > 7001 && xpHeroi <= 8000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nivel de Platina"  );
}
else if (xpHeroi > 8001 && xpHeroi <= 9000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nivel de Ascendente"  );
}
else if (xpHeroi > 9001 && xpHeroi <= 10000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nivel de Imortal"  );
}
else if (xpHeroi >= 10001 ) {
    console.log("O Herói de nome " + nomeHeroi + " está no nivel de Radiante"  );
}

}
verificaXp();