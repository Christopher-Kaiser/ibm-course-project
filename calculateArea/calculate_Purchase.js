let amount1;
let amount2;
let amount3;
let amount4;

function groceryTracker() {
    amount1 = parseFloat(document.getElementById('grocery1').value);
    amount2 = parseFloat(document.getElementById('grocery2').value);
    amount3 = parseFloat(document.getElementById('grocery3').value);
    amount4 = parseFloat(document.getElementById('grocery4').value);

    let totalAmount = amount1 + amount2 + amount3 + amount4;

    document.getElementById('result').innerText = `The amount of the expenditure is: $${totalAmount.toFixed(2)}`;
}
