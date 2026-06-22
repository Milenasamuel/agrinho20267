// --- FUNÇÃO: TAMANHO DA FONTE ---
let tamanhoAtual = 18; // Inicial baseado no CSS

function alterarFonte(direcao) {
    const limiteMinimo = 14;
    const limiteMaximo = 28;
    
    tamanhoAtual += direcao * 2; // Aumenta ou diminui de 2 em 2 pixels
    
    // Restringe aos limites estabelecidos
    if (tamanhoAtual < limiteMinimo) tamanhoAtual = limiteMinimo;
    if (tamanhoAtual > limiteMaximo) tamanhoAtual = limiteMaximo;
    
    // Aplica a alteração ao tamanho base do root do documento
    document.documentElement.style.setProperty('--tamanho-base', tamanhoAtual + 'px');
}

// --- FUNÇÃO: BRILHO DA TELA ---
let opacidadeOverlay = 0; // 0 significa brilho máximo (sem overlay escuro)

function alterarBrilho(quantidade) {
    // "Aumentar brilho" reduz a opacidade da camada preta. 
    // "Diminuir brilho" aumenta a opacidade da camada preta.
    // O parâmetro recebido vem invertido para fazer sentido visual ao usuário (Ex: +10 brilho diminui a sombra).
    
    opacidadeOverlay -= (quantidade / 100);
    
    // Limita a opacidade entre 0 (tela normal) e 0.75 (bem escuro, mas legível)
    if (opacidadeOverlay < 0) opacidadeOverlay = 0;
    if (opacidadeOverlay > 0.75) opacidadeOverlay = 0.75;
    
    const overlay = document.getElementById('overlay-brilho');
    overlay.style.opacity = opacidadeOverlay;
}

// --- FUNÇÃO: MODO DALTONISMO ---
function alternarDaltonismo() {
    const body = document.body;
    const btn = document.getElementById('btn-daltonismo');
    
    body.classList.toggle('modo-daltonismo');
    
    // Altera o texto do botão para indicar o estado atual
    if (body.classList.contains('modo-daltonismo')) {
        btn.innerText = "Modo Normal";
        btn.style.backgroundColor = "#ffeb3b";
        btn.style.color = "#000";
    } else {
        btn.innerText = "Modo Daltonismo";
        btn.style.backgroundColor = "white";
        btn.style.color = "#333";
    }
}
