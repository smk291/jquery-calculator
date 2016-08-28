$(function() {
  var $display = $('#screen')
  var operator = '';
  var symbol = '';
  var operand = '';
  var calculated = false;

  var operations = {
    "+": function add(val0, val1) {
      return Number(val0) + Number(val1);
    },
    "-": function subtract(val0, val1) {
      return val0 - val1;
    },
    "x": function multiply(val0, val1) {
      return val0 * val1;
    },
    "÷": function divide(val0, val1) {
      return val0 / val1;
    },
  }

  function evaluateFunction(symbol, operand, operator) {
    var evaluation = operations[symbol](operand, operator);
    if (evaluation === Infinity ) {
      return "ERROR";
      calculated = true;
    }
    return evaluation;
  }

  function clear (arr){
    for (var i = 0; i < arr.length; i++){
      arr[i] = '';
    }
  }

  $('.buttons').on('mousedown', 'span', calculator);

  function calculator(event) {
    var input = $(event.target).text();

    if (input >= 0) {
      if (calculated === true) {
        clear([operator, operand, symbol]);
        calculated = false
      }
      operator += input;
      $display.text(operator);
    } else if (operations[input]) {
      if (calculated === true) {
        calculated = false;
      } else if (operand === '') {
        operand = operator;
      } else if (operator !== ''){
        operand = evaluateFunction(symbol,operand,operator);
      }
      clear([operator]);
      symbol = input;
      $display.text(operand);
    } else if (input === '=') {
      if (operand === ''){
        operand = operator;
        clear([operator, symbol]);
      } else if (operator !== ''){
        operand = evaluateFunction(symbol,operand,operator);
      }
      calculated = true;
      $display.text(operand);
    } else {
      clear([operator, operand, symbol]);
      $display.text(operand);
    }
  }
})
