function calc(num1, num2, opration){

    switch(opration){

        case '+':
            alert(num1 + num2);
            break;
        case '-':
             alert(num1 - num2);
             break;
        case '*':
            alert(num1 * num2);
            break;
        case '/':
            alert(num1 / num2);
            break;    
        default:
            alert("Invalid");
            break;
    }

}

var num1 = parseInt(prompt("Enter your first number : "));
var opration = prompt("Enter your opration : ");
var num2 = parseInt(prompt("Enter your second number : "));

calc(num1, num2, opration);
alert("Thanks for using our calculator xD");
