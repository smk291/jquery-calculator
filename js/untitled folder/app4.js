'use strict'
$(function(){
  var firstTerm = '';
  var operator = '';
  var $screen = $('#screen');
  var calculatedBool = false;
  var result = 0;
  var numberStorage = 0;

  function operations (arg1, arg2, arg3) {
    if (arg1 === "+"){
      return Number(arg2) + Number(arg3);
    } else if (arg1 === "-"){
      return Number(arg2) - Number(arg3);
    } else if (arg1 === "÷"){
      return arg2 / arg3;
    } else if (arg1 === "x"){
      return arg2 * arg3;
    }
  // return operations[op1];
  }

  $('.buttons').mousedown(function(event){
    var $eventText = $(event.target).text();

    function calculationAndDisplay(input){
  //>If event text greater than or equal to 0
      if (Number($eventText) >= 0)  {
  //>>If a calculation was just performed, reset screen and all other values
         if(calculatedBool){
          $screen.text('');
          firstTerm = 0;
          operator = '';
          calculatedBool = false;
      }
        console.log("Event text is " + $eventText);
    //Add digits to screen display
        $screen.text($screen.text() + $eventText);
        console.log("Screen text is " + $screen.text());
        console.log("First term is " + firstTerm)
        console.log("Operator is " + operator);
    //If when 'C' is pressed
    } else if (event.target.id === 'clear'){
        if (calculatedBool){
          firstTerm = 0;
          $screen.text('');
          operator = '';
          calculatedBool = false;
        }
          console.log("Screen text is " + $screen.text());
    //If the screen is empty
        if ($screen.text() === ''){
          console.log("Screen text cleared. It is now " + $screen.text());
    //Empty the firstTerm as well
          firstTerm = '';
          console.log("First term is now " + firstTerm);
    //But if it isn't, empty just the screen
        } else {
          console.log("Screen contains text " + $screen.text() + " and is being reset.")
          $screen.text('');
          console.log("Screen text is now " + $screen.text())
        }
    //If the target is the equals button
      } else if (event.target.id == 'equals'){
        if(calculatedBool){
          numberStorage;
          $screen.text(operations(operator, $screen.text(), numberStorage));
        } else if (Number(firstTerm) && String(operator) && Number($screen.text())){     // Then if firstTerm is a number, the operator is a string and screentext is a Number
    // Return the result of the operation and put it on the screen
          numberStorage = $screen.text();
          console.log ('First term ' + firstTerm + ' ' + operator + ' ' + $screen.text() + ' equals ' + operations(operator, firstTerm, $screen.text()));
          $screen.text(operations(operator, firstTerm, $screen.text()));
          calculatedBool = true
        }
    // But if the target isn't a number and isn't the clear button or the equal button
      } else {
    //Then it must be one of the operators
    //So make the screen digits the firstTerm
        firstTerm = $screen.text();
    //Clear the screen
        $screen.text('')
       console.log('First term: ' + firstTerm);
    //Make 'operator' the operator'
        operator = $eventText;
        console.log('Operator is ' + operator);
        calculatedBool = false;
      }
    }

    calculationAndDisplay(event);

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
