const botao = document.getElementById('botao');
const input = document.getElementById('input');
const lista = document.getElementById('lista');
const deletaLista = document.getElementById('deletaLista');

function adicionarTarefa() {
    let valorInput = input.value.trim();

    if (valorInput == '') {
        alert('Adicione uma tarefa!')
        return;
    }

       let li = document.createElement('li')
        li.innerHTML = `
        ${valorInput}
        <div class="acoes">
        <span onclick="editarTarefa(this)">✏️</span>
        <span onclick="deletarTarefa(this)">🗑️</span>
        </div>
        `;
    document.querySelector('ul').appendChild(li)

    input.value = ''


}

function deletarTarefa(li) {
    li.parentElement.parentElement.remove()
}

function editarTarefa(el) {
    let  li = el.parentElement.parentElement

    let textoAtual = li.firstChild.textContent.trim();
    let novoTexto = prompt('Edite a tarefa atual: ', textoAtual);

    if (novoTexto !== null && novoTexto.trim()) {
          li.firstChild.textContent = novoTexto;
    }
}

deletaLista.addEventListener('click', function() {
    if (confirm('Tem certeza que deseja deletar toda a lista?')) {
        lista.innerHTML = '';
    }
});