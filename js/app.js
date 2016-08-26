$(function(){
  $display = $('#screen')
  // First value is working number and number that will act on the second number
  // Second value stores operator as string
  // Third value is number acted upon and result of operations that don't throw error
  // Fourth value indicates whether user has executed 'equals,' in which case special rules apply temporarily
  var values = { 0: '', 1: '', 2: '', 3: false}

  // changeValues changes the values of the 'values' object literal.
  function changeValues (p0,p1,p2,p3){
    values = {0:p0, 1:p1, 2:p2, 3:p3};
  }

  // the 'operations' object literal stores functions corresponding to mathematical operations
  var operations = {
    "+": function add (val0, val1) {return Number(val0) + Number(val1)},
    "-": function subtract (val0, val1) {return val0 - val1},
    "x": function multiply (val0, val1) {return val0 * val1},
    "÷": function divide (val0, val1) {return val0 / val1},
    }

  //Event listener attaches to class 'buttons' and fires only on spans
  $('.buttons').on('mousedown', 'span', calculator);
  function calculator (event){
    var $input = $(event.target).text();
    // If event.target's text is a number
    if ($input >= 0){
      // and special rules apply because user has just used 'equals'
      if(values[3] === true){
        // reset all values. Calculation is complete. Start new calculation.
        values = {0: '', 1: '', 2: '', 3: false};
      }
      // concatenate event.target text with values[0]. Leave other values unchanged.
      changeValues (values[0] += $input,values[1],values[2],values[3]);
      // and update the display
      $display.text(values[0]);
    // But if event.target's text math operation
    } else if ((jQuery.inArray($input,["+","-","x","÷"])) > -1){
      // And user just executed 'equals'
      if (values[3] === true){
        // Reset the first number, store operator, keep result and turn off special rules
        // This retains result for new calculation and makes sure user isn't concatenating new working number onto old.
        changeValues ('',$input,values[2],false);
      // But if 'values' has no number at values[2],
      } else if (values[2] === ''){
        //Reset first number, store operator, and set values[0] as 'result' (values[2], meaning user is done concatenating
        // first number, has chosen a mathematical operation and is ready to start concatting working number
        changeValues ('',$input,values[0],values[3]);
      // If special 'equals' rules don't apply and there is a number in values[2], there is a number in values[0];
      } else {
        // Reset first number, store operator, execute function and store result, and retain 'calculated' boolean;
        // This line comes into play if user is chaining functions or chooses a different mathematical operation
        changeValues ('',$input,operations[values[1]](values[2],values[0]),values[3]);
      }
      // If values has no working number (values[0]), this line simply stores the operator
      // Without this line, calculator does not throw an error when calculator tries to execute operation
      // but hasn't stored result/a number to act upon.
      if (Number(values[0]) === ''){
        changeValues (values[0],$input,values[2],values[3]);
      }
      // Update screen
      $display.text(values[2]);
    // If input text is 'equals'
    } else if ($input === '='){
      // And there is no result/number to act upon
      if (values[2] === ''){
        //Screen displays an error
        $display.text("Error");
        //And values resets.
        changeValues ('','','',false);
      // If there is a result/number to act upon, then there is also a working number
      } else {
        // thus 'equals' executes operation, and remembers working number and operation
        // so that operation can be repeated
        changeValues (values[0],values[1],operations[values[1]](values[2],values[0]),true);
      //Update screen
      $display.text(values[2]);};
    // Otherwise user must have pressed 'clear'
    } else {
      // Reset all values
      changeValues ('','','',false);
      // Reset screen.
      $display.text(values[2]);
    }
  }
})


// $(function(){
//   $display = $('#screen')
//   var values = { 0: '', 1: '', 2: '', 3: false}
//
//   function changeValues (p0,p1,p2,p3){
//     values = {0:p0, 1:p1, 2:p2, 3:p3};
//   }
//
//   var operations = {
//     "+": function add (val0, val1) {return Number(val0) + Number(val1)},
//     "-": function subtract (val0, val1) {return val0 - val1},
//     "x": function multiply (val0, val1) {return val0 * val1},
//     "÷": function divide (val0, val1) {return val0 / val1},
//     }
//
//   $('.buttons').on('mousedown', 'span', calculator);
//   function calculator (event){
//     var $input = $(event.target).text();
//     if ($input >= 0){
//       if(values[3] === true){
//         values = {0: '', 1: '', 2: '', 3: false};
//       }
//       changeValues (values[0] += $input,values[1],values[2],values[3]);
//       $display.text(values[0]);
//     } else if ((jQuery.inArray($input,["+","-","x","÷"])) > -1){
//       if (values[3] === true){
//         changeValues ('',$input,values[2],false);
//       } else if (values[2] === ''){
//         changeValues ('',$input,values[0],values[3]);
//       } else {
//         changeValues ('',$input,operations[values[1]](values[2],values[0]),values[3]);
//       }
//       if (Number(values[0]) === ''){
//         changeValues (values[0],$input,values[2],values[3]);
//       }
//       $display.text(values[2]);
//     } else if ($input === '='){
//       if (values[2] === ''){
//         $display.text("Error");
//         changeValues ('','','',false);
//       } else {
//         changeValues (values[0],values[1],operations[values[1]](values[2],values[0]),true);
//       $display.text(values[2]);};
//     } else {
//       changeValues ('','','',false);
//       $display.text(values[2]);
//     }
//   }
// })
