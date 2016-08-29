"use strict"

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
    }
    return evaluation;
  }



  $('.buttons').on('mousedown', 'span', calculator);

  function calculator(event) {
    var $input = $(event.target).text();
    if ($input >= 0) {
      if (calculated === true) {
        operator = '';
        operand = '';
        symbol = '';
        calculated = false
      }
      operator = operator + $input;
      $display.text(operator);
    } else if ((jQuery.inArray($input, ["+", "-", "x", "÷"])) > -1) {
      if (calculated === true) {
        calculated = false;
      } else if (operand === '') {
        operand = operator;
      } else if (operator !== ''){
        operand = evaluateFunction(symbol,operand,operator);
      }
      operator = '';
      symbol =  $input;
      $display.text(operand);
    } else if ($input === '=') {
      if (operand === ''){
        operator = '';
        symbol = '';
        operand = operator;
        calculated = true;
      } else if (operator !== ''){
        operand = evaluateFunction(symbol,operand,operator);
        calculated = true;
      }
      $display.text(operand);
    } else {
      operator = '';
      operand = '';
      symbol = '';
      calculated = false;
      $display.text(operand);
    }
  }
})
