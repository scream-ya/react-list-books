import { TEST, TEST2 } from './actionsType';

export const test = (value) => ({
  type: TEST,
  value,
});

export const test2 = (value) => ({
  type: TEST2,
  value,
});
