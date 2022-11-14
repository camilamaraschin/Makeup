import { useNavigate } from "react-router-dom";
import Produtos from "./Produtos";
import './Produtos.css';

function Maquiagem() {
   return (
    <div>
<Produtos
foto='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRyVKBfv5GYnN3lJMwH4bnoL8GXoTf-xCgClp90fyAghu9Et382WBXAjdpALA5ApPXXZZqNLS11Fjc&usqp=CAc'
nome=''
produto="Batom vermelho"
price={10.90}
/>
<Produtos
foto='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ8lzxTr8eR9WQxWIAb0u30o-HFMHW0vsPMRo3E2nbKgqS6eyy2xtDWWlzTZ9L2-xHSR-k32TL_eg&usqp=CAc'
nome=''
produto="Base para o rosto"
price={31.90}
/>
<Produtos
foto='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRncegvh4O3HZWyHi9rllOSWZMoomr6CJgb19Pz91i1QxiZTZFhKO3seNndkmRlHtcnfLDmsx5tag&usqp=CAc'
nome=''
produto="Pó Compacto"
price={22.90}
/>
<Produtos
foto='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSvbmIpmeKkVISuzI8JmE-17U8DFkfotcj6tz-tDXBr8qsWnj0pylA7ajBnPtj-o3FKBWPfNjuaEg&usqp=CAc'
nome=''
produto="Mascara de Cilios"
price={29.24}
/>
<Produtos
foto='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTsfzi7iPe-JELpjJC7S07ICRQIG6t3eUZaQFcyzQuiboudVWRxQLBFS3tm6vs8FWgRNmstYwptdQ&usqp=CAc'
nome=''
produto="Maleta de Maquiagem"
price={29.24}
/>

 

    </div>
   )
  


}

export default Maquiagem