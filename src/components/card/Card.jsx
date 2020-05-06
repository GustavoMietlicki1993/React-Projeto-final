import * as React from "react";
import './Card';

class Card extends React.Component {

    render() {
        return (
            <div className={'card-container'}>
                <header>HEADER</header>

                {
                    this.props.children
                }
                
                <footer>FOOTER</footer>

            </div>
        );
    }
}

export default Card;
