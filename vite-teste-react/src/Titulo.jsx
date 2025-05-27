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

