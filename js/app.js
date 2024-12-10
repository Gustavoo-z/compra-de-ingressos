function comprar() {
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
        if(quantidade <= 0 || quantidade > 10) {
            alert('Por favor digite uma quantidade válida!');
        } else {
            let pista = parseInt(document.getElementsByClassName('lista')[0].getElementsByTagName('li')[0].textContent.split('Pista')[1]);

            let superior = parseInt(document.getElementsByClassName('lista')[0].getElementsByTagName('li')[1].textContent.split('superior')[1]);

            let inferior = parseInt(document.getElementsByClassName('lista')[0].getElementsByTagName('li')[2].textContent.split('inferior')[1]);
        
            let listaIngressos = document.getElementsByClassName('lista')[0];
        
            if (ingresso == 'pista') {
                let ingressoPista = pista - quantidade;
                if(pista <= 0) {
                    alert('Ingresso pista esgotado!');
                } else { listaIngressos.innerHTML = `<li>Pista<span id="qtd-pista">${ingressoPista}</span></li><li>Cadeira superior<span id="qtd-superior">${superior}</span></li>
                <li>Cadeira inferior<span id="qtd-inferior">${inferior}</span></li>`
                }
            }
            if (ingresso == 'superior') {
                let ingressoSuperior = superior - quantidade;
                if(superior <= 0) {
                    alert('Ingresso superior esgotado!');
                } else { listaIngressos.innerHTML = `<li>Pista<span id="qtd-pista">${pista}</span></li><li>Cadeira superior<span id="qtd-superior">${ingressoSuperior}</span></li>
                <li>Cadeira inferior<span id="qtd-inferior">${inferior}</span></li>`
                }
            }
            if (ingresso == 'inferior') {
                let ingressoInferior = inferior - quantidade;
                if(inferior <= 0) {
                    alert('Ingresso inferior esgotado!');
                } else { listaIngressos.innerHTML = `<li>Pista<span id="qtd-pista">${pista}</span></li><li>Cadeira superior<span id="qtd-superior">${superior}</span></li>
                <li>Cadeira inferior<span id="qtd-inferior">${ingressoInferior}</span></li>`
                }
            }
        }
}