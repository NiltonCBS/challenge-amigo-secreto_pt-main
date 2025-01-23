//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let pegarNomes = document.getElementById('amigo').value;
    if(pegarNomes == ''){
        alert('Por favor, insira um nome.');
    }else{
        amigos.push(pegarNomes);
        listar(amigos);
        limparCampo();
    }
}

function limparCampo() {
    limparInput = document.getElementById('amigo');
    limparInput.value = '';
}

function listar(listaNova) {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    // Se a lista estiver vazia, simplesmente retorna sem criar nada
    if (listaNova.length === 0) {
        return;
    }
    
    // Cria o cabeçalho da tabela uma única vez
    const tabelaHeader = document.createElement("thead");
    tabelaHeader.innerHTML = `
        <tr>
            <th>Amigos</th>
            <th>Ações</th>
        </tr>
    `;
    
    // Cria o corpo da tabela
    const tabelaBody = document.createElement("tbody");
    
    listaNova.forEach((Amigos, index) => {
        const linhaDado = document.createElement("tr");
        linhaDado.innerHTML = `
            <td>${Amigos}</td>
            <td>
                <input class="remove" type="button" onclick="remover(${index})" value="Remover" />
                <input class="update" type="button" onclick="editar(${index})" value="Editar" />
            </td>
        `;
        tabelaBody.appendChild(linhaDado);
    });
    
    // Cria a tabela completa
    const tabela = document.createElement("table");
    tabela.appendChild(tabelaHeader);
    tabela.appendChild(tabelaBody);
    
    // Adiciona a tabela à lista
    lista.appendChild(tabela);
}

function remover(index) {
    amigos.splice(index, 1);
    listar(amigos);
}


