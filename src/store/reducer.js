//import { CHANGE_STATUS } from './actionsType';

function reducer(state, action) {
  const currentState = state;
  const actionType = action.type;

  switch (actionType) {
    case 'changeStatus': {
      const { book, nextStatus } = action;
      const { listBooks } = currentState;
      const index = listBooks.findIndex((item) => item.id === book.id);

      book.status = nextStatus;

      listBooks.splice(index, 1, book);

      return { ...currentState, listBooks: [...listBooks] };
    }

    default: {
      return currentState;
    }
  }
}

export default reducer;
