import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListagemPage from "./pages/ListagemPage";
import CadastroPage from "./pages/CadastroPage";
import Header from "./components/header/Header";

class App extends React.Component {


  render(){


    
    return (
       
      <BrowserRouter>
        <Header titulo={'APLICAÇÃO'}/>
        <Switch>
         
          <Route path="/home">
            <HomePage/>
          </Route>

          <Route path="/Listagem">
            <ListagemPage/>
          </Route>

          <Route path="/Cadastro">
            <CadastroPage/>
          </Route>

          
          <Redirect from="*" to="home" />
          

        </Switch>
      </BrowserRouter>
    )
  }
  
  

}


export default App;
