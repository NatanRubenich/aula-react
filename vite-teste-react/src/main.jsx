{/* Importações da biblioteca do React */}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css' (Apagar essa linha depois)
import App from './App.jsx' // Importndo o componente App.jsx

{/* Cria uma rota de onde queremos renderizar nossos componentes */}
{/* Pega o id 'root' */}
createRoot(document.getElementById('root')).render(
  
  /* StrictMode é debug nativo do react */
    /*para fazer o render 2x para encontrar erros*/
  <StrictMode>
  {/* Metodo do React para renderizar a tela (lá do index.html */}
    <App />
  </StrictMode>,
)
