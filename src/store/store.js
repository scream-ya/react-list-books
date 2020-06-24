import { createStore } from 'redux';
import reducer from './reducer';
import listBooks from '../data/items.json';

const initialState = {
  listBooks: listBooks.items,
};

const store = createStore(reducer, initialState);

export default store;
