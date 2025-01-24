let amigos = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim();

    if (nome) {
        let indiceSelecionado = nomeInput.dataset.editIndex;
        
        if (indiceSelecionado !== undefined) {
            amigos[indiceSelecionado] = nome;
            nomeInput.removeAttribute('data-edit-index');
        } else {
            amigos.push(nome);
        }
        limparCampo();
        listar(amigos);
    } else {
        alert('Por favor, insira um nome.');
    }
}

function limparCampo() {
    let limparInput = document.getElementById('amigo');
    limparInput.value = '';
    limparInput.removeAttribute('data-edit-index');
}

function listar(listaNova) {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    if (listaNova.length === 0) {
        return;
    }

    const tabelaHeader = document.createElement("thead");
    tabelaHeader.innerHTML = `
        <tr>
            <th>Amigos</th>
            <th>Ações</th>
        </tr>
    `;
    const tabelaBody = document.createElement("tbody");

    listaNova.forEach((amigo, index) => {
        const linhaDado = document.createElement("tr");
        linhaDado.innerHTML = `
            <td>${amigo}</td>
            <td>
                <input class="remove" type="button" onclick="remover(${index})" value="Remover" />
                <input class="update" type="button" onclick="editar(${index})" value="Editar" />
            </td>
        `;
        tabelaBody.appendChild(linhaDado);
    });
    const tabela = document.createElement("table");
    tabela.appendChild(tabelaHeader);
    tabela.appendChild(tabelaBody);
    lista.appendChild(tabela);
}

function remover(index) {
    let confirma = confirm(`Deseja remover?\nClique em 'OK' para 'sim' ou 'Cancelar' para 'não'.`);
    if (confirma) {
        amigos.splice(index, 1);
        listar(amigos);
    }
}

function editar(index) {
    let nomeInput = document.getElementById("amigo");
    let nomeParaEditar = amigos[index];
    nomeInput.value = nomeParaEditar;
    nomeInput.setAttribute('data-edit-index', index);
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Não há amigos para sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    const sorteado = document.getElementById('resultado');
    sorteado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}