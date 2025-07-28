// main.js
import { Expense } from './expense.js';
import { ExpenseTracker } from './tracker.js';

const tracker = new ExpenseTracker();

document.getElementById("addBtn").addEventListener("click", () => {
  const desc = document.getElementById("desc").value;
  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;

  if (!desc || !amount || !category) {
    alert("Fill all fields");
    return;
  }

  const expense = new Expense(desc, amount, category);
  tracker.addExpense(expense);
  displayExpenses(tracker.getAllExpenses());
});

document.getElementById("filterBtn").addEventListener("click", () => {
  const filterCat = document.getElementById("filterCategory").value;
  const filtered = tracker.filterByCategory(filterCat);
  displayExpenses(filtered);
});

function displayExpenses(expenses) {
  const list = document.getElementById("expenseList");
  list.innerHTML = "";
  expenses.forEach(exp => {
    const li = document.createElement("li");
    li.textContent = exp.getDetails();
    list.appendChild(li);
  });
}
