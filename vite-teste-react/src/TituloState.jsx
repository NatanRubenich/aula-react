import { useState } from "react";

// Declara um componente funcional chamado TituloState que recebe uma prop chamada "cor"
function TituloState({ cor }) {

    // Cria um estado "texto" com valor inicial "Oi, eu sou um título"
    // A função "setTexto" serve para atualizar esse estado
    const [texto, setTexto] = useState("Oi, eu sou um título");

    // Cria um segundo estado "inputTexto", usado para armazenar o que o usuário digita no input
    // A função "setInputTexto" atualiza esse valor
    const [inputTexto, setInputTexto] = useState("");

    //CRIAR SOMENTE DEPOIS DE DECLARAR O BOTÃO
    // Função chamada quando o botão é clicado
    // Atualiza o estado "texto" com o valor digitado no input
    function clicou() {
        setTexto(inputTexto);
    }

    // Retorna a interface do componente (JSX)
    return (
        <div>
            {/* Exibe o título com a cor recebida via props e o texto atual do estado */}
            <h1 style={{ color: cor }}>{texto}</h1>

            {/* Campo de texto controlado pelo estado "inputTexto" */}
            {/* Quando o usuário digita, atualiza o estado com o valor digitado */}
            <input 
                value={inputTexto} 
                onChange={(e) => { setInputTexto(e.target.value) }} 
                type="text" 
            />

            {/* Botão que, ao ser clicado, chama a função "clicou" */}
            {/* Isso faz com que o título seja alterado para o que foi digitado */}
            <button onClick={clicou}>MUDAR</button>
        </div>
    )
}

// Exporta o componente para que possa ser usado em outros arquivos
export default TituloState;