export const SET_CARDS = 'SET_CARDS';
export const ADD_CARD = 'ADD_CARD';

/**
 * Set all cards action
 * @param cards
 * @returns {{cards: *, type: string}}
 */
export function setCards(cards) {
    return {
        type: SET_CARDS,
        cards
    }
}

/**
 * Add Card action
 * @param card
 * @returns {{type: string, card: *}}
 */
export function addCard(card) {
    return {
        type: ADD_CARD,
        card
    }
}