$(function(){
  $display = $('#screen')
  // First value: working number. Act on the 'result' number
  // Second value: stores operator as string.
  // Third value: number resulting/acted upon when there's no error
  // Fourth value: has user recently executed 'equals?' If so, special rules apply.
  var values = { 0: '', 1: '', 2: '', 3: false}

  // Set the values of the 'values' object literal.
  function changeValues (p0,p1,p2,p3){
    values = {0:p0, 1:p1, 2:p2, 3:p3};
  }

  // Store functions corresponding to mathematical operations
  var operations = {
    "+": function add (val0, val1) {return Number(val0) + Number(val1)},
    "-": function subtract (val0, val1) {return val0 - val1},
    "x": function multiply (val0, val1) {return val0 * val1},
    "÷": function divide (val0, val1) {return val0 / val1},
    }

  //Attah event listener to class 'buttons;' fires only on spans
  $('.buttons').on('mousedown', 'span', calculator);
  function calculator (event){
    var $input = $(event.target).text();
    // If event.target's text is a number, either start new calculation or concat input with working number (value[0])
    if ($input >= 0){
      // Has user just used 'equals?'
      if(values[3] === true){
        // Then reset all values; start new calculation.
        values = {0: '', 1: '', 2: '', 3: false};
      }
      // Concat event.target text with values[0]. Leave other values unchanged.
      changeValues (values[0] += $input,values[1],values[2],values[3]);
      // Update the display
      $display.text(values[0]);
    // If event.target's text is math operator other than '=', either build or build + execute calculation
    } else if ((jQuery.inArray($input,["+","-","x","÷"])) > -1){
      // Did user just execute 'equals?'
      if (values[3] === true){
        // Then keep result (value[2]). Store new operator (value[1]). Reset working number.
        changeValues ('',$input,values[2],false);
      // But if user hasn't just 'equalled' and there's no value[2]
      } else if (values[2] === ''){
        //Build calculation: make working number (value[0]) result (value[2]), reset working number(value0]), store operator,
        changeValues ('',$input,values[0],values[3]);
      // If 'equals' rules don't apply and there is a number in values[2]
      } else {
        // Reset working number, store operator, execute function and store result, and retain 'calculated' boolean;
        // Calculator will now chain operations using just numbers and the four operators
        changeValues ('',$input,operations[values[1]](values[2],values[0]),values[3]);
      }
      // If values has no working number (values[0])
      if (Number(values[0]) === ''){
      // stores the operator
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
