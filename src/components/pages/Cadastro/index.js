import './Cadastro.css'

function Cadastro (){

    return(

        <div>

            <h1> Preencha suas informações abaixo:</h1>
            <form className="form">
        <label>
            Nome Completo:
            <input type="text"/>
          </label> <br/>

          <label>
            E-mail: 
            <input type="text" />
          </label><br/>
          <label>
            Data de nascimento: 
            <input type="text" />
          </label><br/>
          <label>
            CEP:
            <input type="text"  />
          </label><br/>
          <label>
            Rua:
            <input type="text"  />
          </label><br/>
          <label>
            Numero:
            <input type="text"/>
          </label><br/>
          <label>
            Bairro:
            <input type="text"  />
          </label><br/>
          <label>
            Cidade:
            <input type="text" />
          </label><br/>
          <label>
            Estado:
            <input type="text" />
          </label><br/>
          <button type="submit">Enviar</button>
        </form>
      </div>

        
    )
}

export default Cadastro