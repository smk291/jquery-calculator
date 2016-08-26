$(function(){
  $display = $('#screen')
  // Operator, symbol, operand, calculated?
  var values = {'operator':'','symbol':'','operand':'','calculated': false};

  var operations = {
    "+": function add (val0, val1) {return Number(val0) + Number(val1)},
    "-": function subtract (val0, val1) {return val0 - val1},
    "x": function multiply (val0, val1) {return val0 * val1},
    "÷": function divide (val0, val1) {return val0 / val1},
    }

  // Updates values object literal
  function buildFunction (oldValues1, newValues2){
    for (key in newValues2){
      oldValues1[key] = newValues2[key];
    }
    return oldValues1
  }

  //Evaluates function, retrieving terms and arithmetic operation from values
  function evaluateFunction(symbol, operand, operator){
    var evaluation = operations[symbol](operand,operator)
    if (evaluation === Infinity){
      return "ERROR"
    }
    return evaluation
  }

  $('.buttons').on('mousedown', 'span', calculator);
  function calculator (event){
    var $input = $(event.target).text();
    // if input is number
    if ($input >= 0){
      // and user just ran evaluateFunction (__, __, __ T)
      if (values['calculated'] === true){
        // Reset values --> __, __, __, F
        buildFunction(values, {'operator':'','operand':'','symbol':'','calculated': false});
      }
      // Concat operator with input -->  operator + concat, __, __, F
      values['operator'] = values['operator'] + $input;
      // Update display
      $display.text(values['operator']);
    // if input is arithmetic operator
    } else if ((jQuery.inArray($input,["+","-","x","÷"])) > -1){
      // And user just ran evaluate function (__, __, __ T)
      if (values['calculated'] === true){
        // Reset operator and replace symbol -- > '', button input, __, F
        // This is important for chaining
        buildFunction (values, {'operator': '','symbol': $input,'calculated':false,});
      // If there's no operand and user didn't just evaluate function (__, __, '', F)
      } else if (values['operand'] === ''){
        // Reset operator, store symbol, move old operator to operand ---> '', button input, old operator, F
        buildFunction(values, {'operand':values['operator'],'operator':'','symbol': $input,});
      // If above two conditions aren't met, 'calculated' is false and there's an operand, operator can be anything or blank ---> __, __, evlnumber, F
      } else {
        // Evaluate, reset operator, store input, and don't change 'calculated' boolean
        // Not changing the boolean stops the chaining of functions, which means user can change symbol without evaluating function
        // And can concat to operator without concatting onto old operator
        // ---> '', button input, evaluateFunction, F
        buildFunction(values, {'operator':'', 'symbol':$input, 'operand':evaluateFunction(values['symbol'],values['operand'],values['operator'])});
      }
      // Operator is empty. Now store the button input ---> '', button input, __, F
      buildFunction(values, {'symbol':$input,});
      // Update display
      $display.text(values['operand']);
    // If button is 'equals'
    } else if ($input === '='){
        // Evaluate function, keep operator, keep symbol, set 'calculated' to true; this enables chaining ---> old operator, old symbol, new operand, calculated true
        buildFunction(values, {'operand':evaluateFunction(values['symbol'],values['operand'],values['operator']),'calculated':true,});
        // Update display
        $display.text(values['operand']);
    // Otherwise button input must be from 'clear' button
    } else {
      // Reset everything: operator, symbol, operand, calculated boolean
      buildFunction(values, {'operator':'','operand':'','symbol':'','calculated': false,});
      // Update display
      $display.text(values['operand']);
    }
  }
})



// Complete script below without comments:

// $(function(){
//   $display = $('#screen')
//   var values = {'operator':'','symbol':'','operand':'','calculated': false};
//
//   var operations = {
//     "+": function add (val0, val1) {return Number(val0) + Number(val1)},
//     "-": function subtract (val0, val1) {return val0 - val1},
//     "x": function multiply (val0, val1) {return val0 * val1},
//     "÷": function divide (val0, val1) {return val0 / val1},
//     }
//
//   function buildFunction (oldValues1, newValues2){
//     for (key in newValues2){
//       oldValues1[key] = newValues2[key];
//     }
//     return oldValues1
//   }
//
//   function evaluateFunction(symbol, operand, operator){
//     var evaluation = operations[symbol](operand,operator)
//     if (evaluation === Infinity){
//       return "ERROR"
//     }
//     return evaluation
//   }
//
//   $('.buttons').on('mousedown', 'span', calculator);
//   function calculator (event){
//     var $input = $(event.target).text();
//     if ($input >= 0){
//       if (values['calculated'] === true){
//         buildFunction(values, {'operator':'','operand':'','symbol':'','calculated': false});
//       }
//       values['operator'] = values['operator'] + $input;
//       $display.text(values['operator']);
//     } else if ((jQuery.inArray($input,["+","-","x","÷"])) > -1){
//       if (values['calculated'] === true){
//         buildFunction (values, {'operator': '','symbol': $input,'calculated':false,});
//       } else if (values['operand'] === ''){
//         buildFunction(values, {'operand':values['operator'],'operator':'','symbol': $input,});
//       } else {
//         buildFunction(values, {'operator':'', 'symbol':$input, 'operand':evaluateFunction(values['symbol'],values['operand'],values['operator'])});
//       }
//       buildFunction(values, {'symbol':$input,});
//       $display.text(values['operand']);
//     } else if ($input === '='){
//         buildFunction(values, {'operand':evaluateFunction(values['symbol'],values['operand'],values['operator']),'calculated':true,});
//         $display.text(values['operand']);
//     } else {
//       buildFunction(values, {'operator':'','operand':'','symbol':'','calculated': false,});
//       $display.text(values['operand']);
//     }
//   }
// })
