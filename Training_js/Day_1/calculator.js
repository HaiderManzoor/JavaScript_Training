let num_1 = parseFloat(prompt("Enter first number:"));
let num_2 = parseFloat(prompt("Enter second number:"));
let operation = prompt("Choose operation: +, -, *, /");

let result;

if (operation === "+") {
    result = num_1 + num_2;
    alert("Result is: " + result);
} else if (operation === "-") {
    result = num_1 - num_2;
    alert("Result is: " + result);
} else if (operation === "*") {
    result = num_1 * num_2;
    alert("Result is: " + result);
} else if (operation === "/") {
    if (num_2 !== 0) {
        result = num_1 / num_2;
        alert("Result is: " + result);
    } else {
        alert("Division by zero is not possible.");
    }
} else {
    alert("Invalid operation selected.");
}
