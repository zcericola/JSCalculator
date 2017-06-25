//Function that shows an error message if the calculator has to display more than 15 numbers.
$(document).ready(function() {
  var testNumLength = function(number) {
    if (number.length > 9) {
      totaldiv.text(number.substr(number.length - 9, 9));
      if (number.length > 15) {
        number = "";
        totaldiv.text("Error");
      }
    }
  };
  //Declaring variables as empty strings and setting one equal to the total div in HTML with JQuery.

  var number = "";
  var newnumber = "";
  var operator = "";
  var totaldiv = $("#total");
  totaldiv.text("0");

  //Click event that will take the text of each button and append it to the number variable and then set the text of the total screen to the number that was clicked.  Finally, it will call the test number function to make sure more than 15 characters weren't entered.

  $("#numbers a").not("#clear,#clearAll").click(function() {
    number += $(this).text();
    totaldiv.text(number);
    testNumLength(number);
  });
  //Click event that will handle the operators' clicks except for the equals button. It will take the input of the button clicked and set the operator equal to it. Then set newnumber equal to number and empty the number variable. Finally, the total screen will show zero.

  $("#operators a").not("#equals").click(function() {
    operator = $(this).text();
    newnumber = number;
    number = "";
    totaldiv.text("0");
  });

  //Click event for the clear and clearAll buttons. If clicked, the number variable empties, the total screen shows 0. Also if clear all is clicked, then the newnumber will also be emptied.

  $("#clear, #clearAll").click(function() {
    number = "";
    totaldiv.text("0");
    if ($("#clearAll").click()) {
      newnumber = "";
    }
  });

  //Click event that performs all of our calculations. Upon clicking equals, this function will determine which operator was used and perform the appropriate calculation. Then, the number will be shown on the total screen and we will test to make sure the number isn't too large. Finally, both number and newnumber are reset for the next operation.

  $("#equals").click(function() {
    if (operator === "+") {
      number = (parseFloat(number, 10) + parseFloat(newnumber, 10)).toString(
        10
      );
    } else if (operator === "-") {
      number = (parseFloat(newnumber, 10) - parseFloat(number, 10)).toString(
        10
      );
    } else if (operator === "/") {
      number = (parseFloat(newnumber, 10) / parseFloat(number, 10)).toString(
        10
      );
    } else if (operator === "x") {
      number = (parseFloat(newnumber, 10) * parseFloat(number, 10)).toString(
        10
      );
    }

    totaldiv.text(number);
    testNumLength(number);
    console.log("this is the number variable:" + number);
    console.log("this is the newnumber variable:" + newnumber);

    number = "";
    newnumber = "";
  });
});
