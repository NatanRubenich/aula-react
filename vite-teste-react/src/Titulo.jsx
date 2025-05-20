/*
PRIMEIRO ASSIM:
function Titulo() {
  return (
    <div>
        <h1>Oi, eu sou um título</h1>
        <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
    </div>
  )
}
export default Titulo;
*/


/* 
SEGUNDAMENTE FAÇA ASSIM: 
function Titulo() {

    let nome = "Natan";
    //const urlImagem = "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m8kgvn1yhzwx96";
    return (
    <div>
        <h1>Oi, eu sou {nome}</h1>
        {/*<img src={urlImagem} /> /}
        <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
    </div>
  )
}
export default Titulo;
*/


function Titulo( {nome} ) {
 return (
    <div>
        <h1>Oi, eu sou {nome ? nome : "Fulano"} </h1>
        {/* Podemos colocar um :
        paragrafo ? 
        <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
        :
        <p>NADA</p>
        */}
        <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>

    </div>
  )
}
export default Titulo;

