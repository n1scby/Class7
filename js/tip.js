var checkAmountText = document.getElementById("check-amount");
var tipPercentText = document.getElementById("tip-percent");
var tipButton = document.getElementById("tip-button");
var total = document.getElementById("total-to-pay");

tipButton.addEventListener("click", function(){
    var checkAmount = parseFloat(checkAmountText.value);
    var tipPercent = parseFloat(tipPercentText.value)/100;
    var tipAmount;  
    var checkTotal;
    
    if (isNaN(checkAmount) || isNaN(tipPercent))
    {
        alert("Invalid entries. Please enter numbers.");
    }
    else 
    {
    tipAmount = checkAmount * tipPercent;  
    checkTotal = tipAmount + checkAmount;
    total.innerHTML = ("<strong> Check Amount: " + checkAmount + "<br>" +
 "<strong>Tip Amount: " + tipAmount + "<br>" + "Total: $" + checkTotal );

    };
});