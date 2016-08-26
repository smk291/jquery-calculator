//>If event text greater than or equal to 0
    //>>If a calculation was just performed, reset screen and all other values
    //>>And then add digits to screen display
//>If 'clear' is pressed
  //>> If a calculation was just performed, reset screen and all other values
  //>> And if the screen is empty
    //>>>Empty the firstTerm as well
  //>>But if it isn't, empty just the screen
//>If the target is the equals button
  //>>Leave no numerical values blank.
  //>>And if a calculation was just performed
    //>>>Run the operator on the screen text and the number stored when the function last ran
  //>>Otherwise, if the firstTerm is a number and the operator is a string,
    //>>>Return the result of the operation and put it on the screen
//>Otherwise, the target isn't a number and isn't the clear button or the equal button, so it must be an operator
  //>>Make the firstTerm equal to the screen digits
  //>>Set the screen to 0
  //>>See the operator to the operator
  //>>change "just calculated boolean" to false


//function
//While $(event.trigger).text() >= 0
  //Concatenate to arg1 and call function again
//When operator button pressed
  //Call function again; pass operator as arg2 and arg1 as arg3
//When equals button pressed
  //If operator or value is missing
    //throw error
  //Otherwise run function again
    //Pass same args in arg1 and arg2. Pass result as arg3
//And (this should cover the case of the 'clear' button)
  //Clear everything

$(function(){
  $('.buttons').mousedown(function(event){
    function calculator (factor1, operator, factor2){
      if (Number(($(event.trigger)).text())){
        console.log("Number")
      }
    }
  })
})


/// -	hyphen-minus	055	45	0x2D	&#45;
