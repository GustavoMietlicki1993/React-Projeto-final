import * as React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class ListagemPage extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        toCadastro: false,
        categorias: []
    };

    componentDidMount(){
        //recuperar a lista de categoria
        axios
        .get('http://localhost:8080/categoria')
        .then(resp => {
            this.setState({
                categorias: resp.data
            });
        }).catch(erro => {
            console.log('ERRO: ', erro)
        })
    }

    onClickParaCadastro(){

        this.setState({
            toCadastro: true
        });
    }



    render(){

        if(this.state.toListagem){
            return (<Redirect to="/cadastro"/>);
        }

        return (
            <>
                <h2>Listagem Page</h2>
                <button onClick={()=> this.onClickParaCadastro()}>
                    Ir para a tela de cadastro
                </button>

                <div>
                    <ul>
                        {
                            this.state.categorias.map(categoria => <li key={categoria.id}>{categoria.nome}</li>)
                        }
                    </ul>
                </div>
            </>
            
        )
    }
}
export default ListagemPage;