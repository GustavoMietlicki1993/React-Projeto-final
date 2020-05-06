import * as React from "react";

import Card from "./../components/card/Card";
import Titulo from "./../components/titulo/Titulo";

class HomePage extends React.Component {

    render(){
        return (
            <>
                <Card>
                    <Titulo title={'Ola Mundo'}/>

                    <button nome={'Botao 1'} codigo={1} onclick={this.clickButton}/>
                    <button nome={'Botao 2'} codigo={2} onclick={this.clickButton}/>
                    <button nome={'Botao 3'} codigo={3} onclick={this.clickButton}/>
                </Card>
            </>
        )
    }
}
export default HomePage;