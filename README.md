## Basic Calculator
A calculator app that can perform basic arithmetic operations such as addition, subtraction, multiplication, and division. View live webpage [here](https://annacate.github.io/calculator/).

## Motivation
This app was created as the final project in the "JavaScripts Basics" sub-section of the "Web Development 101" section of The Odin Project [curriculum](https://www.theodinproject.com/courses?ref=homenav).

## Technology used
HTML, CSS, and vanilla JavaScript

## Instructions for use
Use your cursor to input numbers and mathematical operators to form a binary operation (e.g., `2 + 3`). Select the equals button (`=`) to compute the solution. Select the Clear button (`C`) to start over.

## Features
If the user tries to divide by `0`, an error message will display. If the user fails to enter the second operand in an operation (e.g., enters `8 + =`) the calculator will continue to display the first operand entered. If the result of an operation is a floating point number, the number of decimal places is limited to 11.

## Limitations
At this point, the calculator can only take one binary operation (e.g., `2 + 3`) at a time. A string of binary operations (e.g., `2 + 3 * 4`) will not compute. It is also unable to take the result of one operation and immediately use that result as the first operand in the next equation; as soon as the user presses a new number or operator, the calculator will clear the results from the previous operation. Floating point numbers are not allowed as operands, and there is not yet a backspace function. There is not yet keyboard support.

## Upgrades for the future
I plan to add all of the features that are listed as unavailable in the "Limitations" section above. I also plan to improve the quality of the JS code, as I know that it is best practice for one function to perform just one task.

## Credits
I used [this blog post](https://codeburst.io/making-a-calculator-with-basic-html-css-and-javascript-part-1-1e4288f0bea1) as a starting point for my HTML and CSS design, drawing on the instructions for creating a table with HTML. 
