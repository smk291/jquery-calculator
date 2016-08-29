} else if ((jQuery.inArray($input, ["+", "-", "x", "÷"])) > -1) {
  if (calculated === true) {
    calculated = false;
    operator = '';
    symbol =  $input;
  } else if (operand === '') {
    operand = operator;
    operator = '';
    symbol =  $input;
  } else if (operator !== ''){
    operand = evaluateFunction(symbol,operand,operator);
    operator = '';
    symbol =  $input;
  }
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

====


REFACTOR
if ($input !== "=" && calculated === true) {
  calculated = false;
  operator = '';
  symbol =  $input;
} else if (operand === '') {
  operand = operator;
  operator = '';
  if ($input !== "="){
    symbol =  $input;
  } else {
    symbol = '';
    calculated = true;
  }
} else if (operator !== ''){
  operand = evaluateFunction(symbol,operand,operator);
  if ($input !== "="){
    operator = '';
    symbol =  $input;
  } else{
    calculated = true;
  }
}


ARITHMETIC
-->if (calculated === true) {
-->  calculated = false;
-->  operator = '';
-->  symbol =  $input;
-->} else if (operand === '') {
-->  operand = operator;
-->  operator = '';
-->  symbol =  $input;
-->} else if (operator !== ''){
-->  operand = evaluateFunction(symbol,operand,operator);
-->  operator = '';
-->  symbol =  $input;
}

EQUALS
} else if ($input === '=') {
-->if (operand === ''){
-->    operator = '';
-->    symbol = '';
-->    operand = operator;
    calculated = true;
-->  } else if (operator !== ''){
-->    operand = evaluateFunction(symbol,operand,operator);
    calculated = true;
  }




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
    operand = operator;
    operator = '';
    symbol = '';
    calculated = true;
  } else if (operator !== ''){
    operand = evaluateFunction(symbol,operand,operator);
    calculated = true;
  }
  $display.text(operand);
