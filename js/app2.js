'use strict'
$(function(){
  var firstTerm = '';
  var display = '';
  var operator = '';

  function operations (op1) {
    if (op1 === "+"){
      return firstTerm + display;
    } else if (op1 === "-"){
      return firstTerm - display;
    } else if (op1 === "÷"){
      return firstTerm / display;
    } else if (op1 === "x"){
      return firstTerm * display;
    }
  // return operations[op1];
  }

  $('.buttons').mousedown(function(event){
    var $eventText = $(event.target).text();
    var isEventANumber = Number($(event.target).text());
    var $screen = $('#screen');

    //This function controls the display
    function setDisplay(input){
      if (isEventANumber >= 0) {
// Put text on display
        display += $(event.target).text();
//        console.log('Display is ' + display);
        $screen.text(display);
      } else if ($(event.target).id === 'clear'){
        if ($screen.text() = ''){
          firstTerm = '';
        } else {
          $screen.text('');
        }
      } else if (event.target.id == 'equals'){
        console.log('equals')
        if (Number(firstTerm) && operator && Number(display)){
          firstTerm = Number(firstTerm);
          display = Number(display);
          console.log ('First term ' + firstTerm + ' ' + operator + ' ' + display + ' equals ' + operations(operator))
          $screen.text(operations(operator));
          display = operations(operator);
        }
      } else {
        firstTerm = $screen.text();
        display = '';
        console.log('First term: ' + firstTerm);
        operator = $eventText;
        console.log('Operator is ' + operator);
      }
    }

    setDisplay(event);

  })

})



// If screen is blank, just start adding
  //   var lastEntry = placeHolder[placeHolder.length - 1];
  //   if (placeHolder !== []  && ((isNaN($(event.target).text()) && isNaN(lastEntry)) || (!isNaN($(event.target).text()) && !isNaN(lastEntry)))){
  //     console.log('They're of the same type');
  //     placeHolder.pop();
  //     placeHolder.push($(event.target).text());
  //   } else { //NEED TO ADD PARAMETER THAT FIRST ENTRY MUST BE NUMBER
  //     if (event.target.id === 'clear'){
  //       console.log('Clear the screen');
  //       $('#screen').text('');
  //       placeHolder = [];
  //     } else if (event.target.tagName == 'SPAN' && event.target.className !== 'operator'){
  //       console.log('Number is ' + $(event.target).text());
  //       placeHolder.push($(event.target).text());
  //     } else if (event.target.className == 'operator' && $(event.target).text() !== '='){
  //       var operator = $(event.target).text();
  //       console.log('Operator is ' + operator);
  //       if (operator === 'x'){
  //         operator === '\*';
  //         console.log('Operator is ' + operator);
  //
  //       } else if (operator === '÷'){
  //         operator === '\/';
  //         console.log('Operator is ' + operator);
  //       }
  //       console.log('Operator is ' + $(event.target).text() + 'interpreted as ' + operator);
  //       placeHolder.push(operator);
  //     }
  //   }
  //   console.log('Placeholder is ' + placeHolder);
  //   if (placeHolder.length === 3 && placeHolder.indexOf('=') === -1){
  //     console.log('evaluating');
  //     var output = eval(placeHolder.join(''));
  //     placeHolder = [output];
  //     $('#screen').text(output);
  //   } else if ( placeHolder.length === 3 && placeHolder.indexOf('=') >= 0){
  //     console.log('resetting');
  //     $('#screen').text($(event.target).text());
  //     placeHolder = [placeHolder[0]]
  //   }
  // });

//
// var placeHolder = [];
// var screenEmptyBool = true;
// var $eventId = event.target.id;
// var eventTagName = event.target.tagName;
// var eventClassName = event.target.className
// var $screenText = $('#screen').text();
// var $eventText = $(event.target).text()
//
// $('.buttons').click(function(event){
//   if ($eventId === 'clear'){
//     $screenText = '';
//     console.log('Emptying screen.');
//     screenEmptyBool = true;
//     console.log('screenEmptyBool set to ' + screenEmptyBool);
//   } else if (eventTagName === 'SPAN' && eventClassName !== 'operator'){
//     if (screenEmptyBool){
//       $screenText = $eventText;
//       console.log('Inserting $eventText' + $eventText);
//       placeHolder = $eventText;
//     }
//     placeHolder
//   } else if (eventClassName == 'operator'){
//     console.log('operator is ' + $eventText);
//   }
// });
// })
