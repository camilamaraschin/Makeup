import {useState} from 'react'
function Produtos(props){
  const [selected,setSelected] = useState (false);
  const {foto, produto, price} =props;

  function handelSelect(){
    const isSelected = !selected;
    if(isSelected) updateTotalPrice(price);
    else updateTotalPrice(price * -1)

    setSelected(isSelected)
  }

  function checkSelected() {
    let classes = "product";
    if (selected) {
      classes = "product selected";
    }
    return classes;
  }

    

    return(
  <div className="Produtos">
   <div className={checkSelected()} onClick={handelSelect}>

    <img src={props.foto} alt={props.nome}/>
    <h3>{props.produto}</h3>
    <p>{props.price.toFixed(2)}</p>
    <button> Comprar</button>

   </div>
    
  </div>
  
    )
  }
  
  export default Produtos;