let nomeHeroi = "Pablo";
let xpHeroi = 100000;

function verificaXp() {
    const niveis = [
        { limite: 1000, nome: "Ferro" },
        { limite: 2000, nome: "Bronze" },
        { limite: 5000, nome: "Prata" },
        { limite: 7000, nome: "Ouro" },
        { limite: 8000, nome: "Platina" },
        { limite: 9000, nome: "Ascendente" },
        { limite: 10000, nome: "Imortal" },
        { limite: Infinity, nome: "Radiante" }
    ];

    for (let nivel of niveis) {
        if (xpHeroi <= nivel.limite) {
            console.log(`O Herói de nome ${nomeHeroi} está no nivel de ${nivel.nome}`);
            break;
        }
    }
}

verificaXp();
