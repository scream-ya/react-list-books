import { TEST, TEST2 } from './actionsType';

function reducer(state, action) {
  const currentState = state;
  const actionType = action.type;

  switch (actionType) {
    default: {
      return currentState;
    }
  }
}

export default reducer;
