import React from 'react';
import {Provider} from 'react-redux';
import './scss/app.scss';
import store from './store/root-reducer';
import CreditCard from './containers/credit-card';

function App() {
    return (
        <Provider store={store}>
            <div className="app-container">
                <CreditCard/>
            </div>
        </Provider>
    );
}

export default App;
