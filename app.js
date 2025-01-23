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
    lista.innerHTML = ``;
    
    listaNova.forEach((Amigos, index) => {
        const amigo = document.createElement("table");
        amigo.innerHTML = `
            <thead>
                    <tr>
                        <th>Amigos</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                    <tr>
                        <td>${Amigos}</td>
                        <td>
                            <input class="remove" type="button" onclick="remover(${index})" value="Remover" />
                            <input class="update" type="button" onclick="editar(${index})" value="Editar" />
                        </td>
                    </tr>
                
            
            `
        lista.appendChild(amigo);
    });
}

function remover(index) {
    amigos.splice(index, 1);
    listar(amigos);
}


