import "./Footer.css";
function Footer (props){

    return (
       <div className="Footer">
        <h3>{props.endereco}</h3>
        <h3>{props.contato}</h3>

       </div>

    )
}

export default Footer 