

// $(function(){
//   $display = $('#screen')
//   var values = {
//     'operator':'',
//     'operand':'',
//     'symbol':'',
//     'calculated': false
//   };
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
//   $('.buttons').on('mousedown', 'span', calculator);
//   function calculator (event){
//     var $input = $(event.target).text();
//     if ($input >= 0){
//       if (values['calculated'] === true){
//         // buildFunction(values, {
//         //   'operator':'',
//         //   'operand':'',
//         //   'symbol':'',
//         //   'calculated': false
//         // });
//      values = {'operator':'', 'operand':'', 'symbol':'', 'calculated': false};
//       }
//       // buildFunction (values, {
//       //   'operator': values['operator'] + $input,
//       // });
//      values['operator'] = values['operator'] + $input;
//       $display.text(values['operator']);
//     } else if ((jQuery.inArray($input,["+","-","x","÷"])) > -1){
//       if (values['calculated'] === true){
//         // buildFunction (values, {
//         //   'operator': '',
//         //   'symbol': $input,
//         //   'calculated':false,
//         // });
//      values['operator'] = '';
//      values['symbol'] = $input;
//      values['calculated'] = false;
//       } else if (values['operand'] === ''){
//         // buildFunction(values, {
//         //   'operand':values['operator'],
//         //   'operator':'',
//         //   'symbol': $input,
//         // });
//          values['operand'] = values['operator'];
//          values['operator'] = '';
//          values['symbol'] = $input;
//       } else {
//         // buildFunction(values, {
//         //   'operand':operations[values['symbol']](values['operand'],values['operator']),
//         //   'symbol':$input,
//         //   'operator':$input,
//         // });
//         values['operand'] = operations[values['symbol']](values['operand'],values['operator']);
//         values['symbol'] = $input;
//         values['operator'] = '';
//       }
//       if (values['operator'] === ''){
//         // buildFunction(values, {
//         //   'symbol':$input,
//         // });
//      values['symbol'] = $input;
//       }
//       $display.text(values['operand']);
//     } else if ($input === '='){
//       if (values['operand'] === ''){
//         $display.text("Error");
//         // buildFunction(values, {
//         //   'operator':'',
//         //   'operand':'',
//         //   'symbol':'',
//         //   'calculated': false,
//         // });
//         values['operator'] = '',
//         values['symbol'] = '',
//         values['operand'] = '',
//         values['calculated'] = false;
//       } else {
//         // buildFunction(values, {
//         //   'operand':operations[values['symbol']](values['operand'],values['operator']),
//         //   'calculated':true,
//         // });
//      values['operand'] = operations[values['symbol']](values['operand'],values['operator'])
//      values['calculated'] = true;
//         $display.text(values['operand']);
//       };
//     } else {
//         // buildFunction(values, {
//         //   'operator':'',
//         //   'operand':'',
//         //   'symbol':'',
//         //   'calculated': false,
//         // });
//      values = {'operator':'', 'operand':'', 'symbol':'', 'calculated': false};
//       $display.text(values['operand']);
//     }
//   }
// })
