$(function(){
  $display = $('#screen')
  var values = { 0: '', 1: '', 2: '', 3: false}

  function changeValues (p0,p1,p2,p3){
    values = {0:p0, 1:p1, 2:p2, 3:p3};
  }

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
      if(values[3] === true){
        values = {0: '', 1: '', 2: '', 3: false};
      }
      changeValues (values[0] += $input,values[1],values[2],values[3]);
      $display.text(values[0]);
    } else if ((jQuery.inArray($input,["+","-","x","÷"])) > -1){
      if (values[3] === true){
        changeValues ('',$input,values[2],false);
      } else if (values[2] === ''){
        changeValues ('',$input,values[0],values[3]);
      } else {
        changeValues ('',$input,operations[values[1]](values[2],values[0]),values[3]);
      }
      if (Number(values[0]) === ''){
        changeValues (values[0],$input,values[2],values[3]);
      }
      $display.text(values[2]);
    } else if ($input === '='){
      if (values[2] === ''){
        $display.text("Error");
        changeValues ('','','',false);
      } else {
        changeValues (values[0],values[1],operations[values[1]](values[2],values[0]),true);
      $display.text(values[2]);};
    } else {
      changeValues ('','','',false);
      $display.text(values[2]);
    }
  }
})
