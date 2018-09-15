import { createStore } from "redux";
import { addExpense, removeExpense } from "./actions";
import expenses from "./reducers";

const store = createStore(expenses);

store.dispatch(addExpense({
    id: 1,
    amount: 45
}));

store.dispatch(addExpense({
    id: 2,
    amount: 20
}));

store.dispatch(addExpense({
    id: 3,
    amount: 30
}));

store.dispatch(removeExpense({
    id: 2
}));

console.log(store.getState().balance);
console.log(store.getState().expenses.length);
