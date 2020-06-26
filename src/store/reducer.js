function reducer(state, action) {
  const actionType = action.type;

  switch (actionType) {
    case 'changeStatus': {
      const { book, nextStatus } = action;
      const { listBooks } = state;
      const index = listBooks.findIndex((item) => item.id === book.id);

      book.status = nextStatus;

      listBooks.splice(index, 1, book);

      return { ...state, listBooks: [...listBooks] };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
