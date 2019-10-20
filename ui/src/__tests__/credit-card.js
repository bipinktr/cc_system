import React from 'react';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import CreditCard from "../containers/credit-card";

// Credit card data to pass for testing
const initialState = {
    cards: [
        {
            "id": 1,
            "name": "Alice",
            "card_number": "1111 2222 3333 4444",
            "limit": 2000,
            "balance": 0
        },
        {
            "id": 2,
            "name": "Bob",
            "card_number": "4444 3333 2222 1111",
            "limit": 5000,
            "balance": 0
        }]
};
//Create mock redux store
const mockStore = configureStore();
const store = mockStore(initialState);

describe("CreditCard", () => {
    it("should render Credit Cards table data", () => {
        const wrapper = mount(<Provider store={store}><CreditCard/></Provider>);
        const rows = wrapper.find('table').find('tbody').find('tr');
        //expect credit cards table tbody rows length 2
        expect(rows.length).toBe(2);
        //Check each rendered rows, first and last rows
        const firstRowColumns = rows.first().find('td').map(column => column.text());
        expect(firstRowColumns.length).toBe(4);
        expect(firstRowColumns[0]).toBe('Alice');
        expect(firstRowColumns[1]).toBe("1111 2222 3333 4444");
        expect(firstRowColumns[2]).toBe("£0");
        expect(firstRowColumns[3]).toBe("£2000");

        const secondRowColumns = rows.last().find('td').map(column => column.text());
        expect(secondRowColumns.length).toBe(4);
        expect(secondRowColumns[0]).toBe("Bob");
        expect(secondRowColumns[1]).toBe("4444 3333 2222 1111");
        expect(secondRowColumns[2]).toBe("£0");
        expect(secondRowColumns[3]).toBe("£5000");
    });
});