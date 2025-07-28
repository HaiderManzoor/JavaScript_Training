export class ExpenseTracker {
  constructor() {
    this.expenses = [];
  }

  addExpense(expense) {
    this.expenses.push(expense);
  }

  getAllExpenses() {
    return this.expenses;
  }

  filterByCategory(category) {
    return this.expenses.filter(e => e.category.toLowerCase() === category.toLowerCase());
  }
}
