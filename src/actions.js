// Action types
export const ADD_EXPENSE = "ADD_EXPENSE";
export const REMOVE_EXPENSE = "REMOVE_EXPENSE";

// Action creators
export const addExpense = expense => ({
    type: ADD_EXPENSE,
    expense
});

export const removeExpense = expense => ({
    type: REMOVE_EXPENSE,
    expense
});
