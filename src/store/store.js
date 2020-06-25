import { createStore } from 'redux';
import reducer from './reducer';
import listBooks from '../data/items10.json';

const initialState = {
  listBooks: listBooks.items,
};

const store = createStore(
  reducer,
  initialState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
