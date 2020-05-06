import * as React from "react";
import './Header.css';
import { string } from "prop-types";
import { NavLink } from "react-router-dom";


class Header extends React.Component {
    render() {
        return (
        <div className='header-container'>
            <h1>{this.props.titulo}</h1>

            <div>
                <NavLink to="/home" activeClassName={'linkactive'}>
                    Home
                </NavLink>

                <NavLink to="/listagem" activeClassName={'linkactive'}>
                    Listagem
                </NavLink>

                <NavLink to="/cadastro" activeClassName={'linkactive'}>
                    Cadastro
                </NavLink>

            </div>
        </div>
        
        )
    }
}

Header.propTypes = {
    titulo: string.isRequired
};

export default Header;