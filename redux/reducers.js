// reducers.js
import { ADD_BUDGET_ENTRY } from './actions';

const initialState = {
  budgetEntries: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUDGET_ENTRY:
      return {
        ...state,
        budgetEntries: [...state.budgetEntries, { ...action.payload, id: Math.random().toString() }],
      };
    default:
      return state;
  }
};

export default reducer;
