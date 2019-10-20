import {SET_CARDS, ADD_CARD} from '../actions/credit-card-actions'

/**
 * Reducer for Cards
 * @param state
 * @param action
 * @returns {*}
 */
export default function cards(state = [], action = {}) {
    switch (action.type) {
        case ADD_CARD:
            return [
                ...state,
                action.card
            ];
        case SET_CARDS:
            return action.cards;

        default:
            return state;
    }
}