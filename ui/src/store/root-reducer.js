import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import cards from '../reducers/credit-card-reducer';

const rootReducer = combineReducers({
    form: formReducer,
    cards
});

// Redux store
const store = createStore(rootReducer);
export default store;