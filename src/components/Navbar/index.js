import { Link } from "react-router-dom"
import "./Navbar.css"


function Navbar(){

    return (
<div className="Navbar">
  <nav>
    <ul>
        <li> <Link to="/"> Inicio </Link></li>
        <li> <Link to="/maquiagem"> Maquiagem </Link> </li>
        <li>  <Link to="/CorpoBanho"> Corpo e Banho </Link></li>
        <li>  <Link to="/perfumaria"> Perfumaria </Link> </li> 
        <li> <Link to="/cadastro"> Cadastro </Link></li>  
        <input type='text' placeholder=" Buscar"></input>
      <button><Link to="/carrinho"> &#128722; </Link> </button>   
      
          
    </ul>

    
  </nav>

</div>

    )
}





export default Navbar 