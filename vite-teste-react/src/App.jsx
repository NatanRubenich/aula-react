import Titulo from "./Titulo"
// Importando o componente Titulo.jsx

// Importando o componente TituloState.jsx
import TituloState from "./TituloState"

function App() {
  return (
    <div>
      <Titulo />
      <Titulo nome="Natan"/>
      {/* Estou passando dentro do PROPS um valor que vai no componente */}
      <Titulo />
      {/* <Titulo cor="red" nome="Natan" paragrafo= {true} /> */}
      <Titulo />
      {/* Quando há mais de um componente, é necessário criar uma div */}
       {/* Basta criar os componentes separados e reutilizar */} 


      <TituloState cor="red" />
      <TituloState cor="green" />
      <TituloState cor="blue" />
    </div>
  )
}

// Exportando o componente App
export default App