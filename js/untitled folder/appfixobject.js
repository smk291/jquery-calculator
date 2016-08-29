$(function(){
  $display = $('#screen')
  var values = {'calculated': false};

  // function changeValues (p0,p1,p2,p3){
  //   values = {0:p0, 1:p1, 2:p2, 3:p3};
  // }

  var operations = {
    "+": function add (val0, val1) {return Number(val0) + Number(val1)},
    "-": function subtract (val0, val1) {return val0 - val1},
    "x": function multiply (val0, val1) {return val0 * val1},
    "÷": function divide (val0, val1) {return val0 / val1},
    }

  $('.buttons').on('mousedown', 'span', calculator);
  function calculator (event){
    var $input = $(event.target).text();
    if ($input >= 0){
      if(values['calculated'] === true){
        values['calculated'] = false;
      }
      values['operator'] = values['operator'] + $input;
      $display.text(values['operator']);
    } else if ((jQuery.inArray($input,["+","-","x","÷"])) > -1){
      if (values['calculated'] === true){
        values['operator'] = '';
        values['symbol'] = $input;
        values['calculated'] = false;
      } else if (values['operand'] === ''){
        values['operand'] = values['operator'];
        values['operator'] = '';
        values['symbol'] = $input;
      } else {
        values['operator'] = '';
        values['symbol'] = $input;
        values['operand'] = operations[values['symbol']](values['operand'],values['operator']);
      }
      if (Number(values['operator']) === ''){
        values['symbol'] = $input;
      }
      $display.text(values['operand']);
    } else if ($input === '='){
      if (values['operand'] === ''){
        $display.text("Error");
        values = {};
      } else {
        values['operand'] = operations[values['symbol']](values['operand'],values['operator'])
        values['calculated'] = true;
        $display.text(values['operand']);
      };
    } else {
        values = {};
      $display.text(values['operand']);
    }
  }
})
