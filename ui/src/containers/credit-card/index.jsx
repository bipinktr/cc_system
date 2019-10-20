import React, {PureComponent} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import CreditCardForm from './form';
import formatCreditCard from './../../util/credit-card-format';
import {addCard, setCards} from './../../actions/credit-card-actions';

class CreditCard extends PureComponent {
    static propTypes = {
        cards: PropTypes.array.isRequired,
        addCard: PropTypes.func.isRequired,
        setCards: PropTypes.func.isRequired,
    };

    componentDidMount() {
        axios.get('http://localhost:3001/credit_card/get_all')
            .then((response) => {
                this.props.setCards(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <h4>Credit Card System</h4>
                <h5>Add</h5>
                <div className="form-container">
                    <CreditCardForm {...this.props}/>
                </div>
                <h5>Existing Cards</h5>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Card Number</th>
                        <th scope="col">Balance</th>
                        <th scope="col">Limit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.cards.map((card) => {
                        return <tr key={card.id}>
                            <td>{card.name}</td>
                            <td>{formatCreditCard(card.card_number)}</td>
                            <td>£{card.balance}</td>
                            <td>£{card.limit}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {cards: state.cards}
}

export default connect(mapStateToProps, {addCard, setCards})(CreditCard);