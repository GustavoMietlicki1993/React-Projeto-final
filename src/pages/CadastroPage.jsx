import * as React from "react";
import { withRouter } from 'react-router-dom';

class CadastroPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            id: '',
            Pagina: '',
            Codigo: '',
            Categoria: ''
        }
        this.submitForm = this.submitForm.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    onClickIrParaListagem() {
        this.props.history.push('/listagem');
    }

    submitForm(event) {
        event.preventDefault();
        //Printamos onde a variavel para o POST está alocada
        console.log(this.state)
    }

    onChangeInput(event) {
        const novoValor = event.target.value
        const atributo = event.target.name

        this.setState({
            [atributo]: novoValor
        });
    }
    render() {
        return (
            <>
                <h2>Cadastro Page</h2>
                <form onSubmit={this.submitForm}>
                    <label>
                        Nome:
                        <input type="text" value={this.state.nome} onChange={this.onChangeInput} name="nome"/>
                    </label>

                    <label>
                        Id: 
                        <input type="number" value={this.state.id} onChange={this.onChangeInput} name="id"/>
                    </label>

                    <label>
                        Página: 
                        <input type="number" value={this.state.pagina} onChange={this.onChangeInput} name="pagina"/>
                    </label>

                    <label>
                        Código: 
                        <input type="number" value={this.state.codigo} onChange={this.onChangeInput} name="codigo"/>
                    </label>

                    <label>
                        Categoria: 
                        <input type="text" value={this.state.categoria} onChange={this.onChangeInput} name="categoria"/>
                    </label>

                    <button type="submit">
                        Salvar
                    </button>
                </form>
            </>
        );
    }
}
export default withRouter(CadastroPage);