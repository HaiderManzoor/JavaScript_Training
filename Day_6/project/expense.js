export class Expense {
  constructor(description, amount, category) {
    this.description = description;
    this.amount = parseFloat(amount);
    this.category = category;
    this.date = new Date().toLocaleDateString();
  }

  getDetails() {
    return `${this.date} - ${this.category} - ${this.description}: $${this.amount.toFixed(2)}`;
  }
}
