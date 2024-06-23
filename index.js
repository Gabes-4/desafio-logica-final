let nomeHeroi = "Pablo";
let xpHeroi = 7800;

function verificaXp(){
    if (xpHeroi <= 1000){
        console.log("O Herói de nome " + nomeHeroi + " está no nivel de ferro" );
    }
    else if (xpHeroi > 7000 && xpHeroi <= 8000) {
        console.log("O Herói de nome " + nomeHeroi + " está no nivel de diamente"  );
    }
}
verificaXp();