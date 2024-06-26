﻿# COA-TASKFORCE-TAKE-HOME-CHALLENGE
 ## Interactive Photo Gallery
 ### Setup Instructions
 #### Clone the Repository:
      git clone <repository-url>
      cd <Interactive Photo Galleryr>
 #### Open the Project:
     Open the project in your preferred code editor (e.g., VS Code).
 #### File Structure
     <Interactive Photo Gallery>
     ├── index.html
     ├── styles.css
     ├── script.js
     └── images/
               ├── fennec-fox.jpg
               ├── humpback-whale.jpg
               ├── brown-baboon.jpg
               └── spotted-deer.jpg
   
  #### Run the Project:
      Open the index.html file in a web browser.
  ### Explanation:
      he interactive photo gallery is implemented using HTML, CSS, and JavaScript. It displays a set of animal images with titles and locations. When a user hovers over an 
      image, additional information (a "Know more" link) appears with a smooth transition.

      1.HTML (index.html):
      The HTML file contains the structure of the gallery. The JavaScript dynamically inserts the gallery items based on a predefined array of objects.

      2.CSS (styles.css):
       The CSS file styles the gallery and adds hover effects. Media queries ensure responsiveness on different screen sizes.

      3.JavaScript (script.js):
        The JavaScript file defines an array of animal objects and dynamically creates gallery items. Event listeners manage the hover effects.
  ## Check for Contiguous Subarray with Target Sum
  #### Problem Statement:
       Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a 
       subarray exists, otherwise return false.
  #### Open the Project:
       Open the project in your preferred code editor (e.g., VS Code).

  #### Explanation:
       1.Initialize start and currentSum to 0.
       2.Iterate through the array with end.
       3.Add the current element to currentSum.
       4.If currentSum exceeds target, subtract elements from start until currentSum is less than or equal to target.
       5.If currentSum equals target, return true.
       6.If the loop ends without finding a subarray, return false.
   Testing:

      Regularly test the implementation with various test cases to ensure accuracy.
  
 ## String Transformation Based on Length
 #### Problem Statement
      Given a string, transform it based on the following rules:
      
      1.If the length of the string is divisible by 3, reverse the entire string.
      2.If the length of the string is divisible by 5, replace each character with its ASCII code.
      3.If the length of the string is divisible by both 3 and 5, perform both operations in the order specified above.
 #### Open the Project
       Open the project in your preferred code editor (e.g., VS Code).

 #### Explanation:
       1.The function first checks if the string length is divisible by both 3 and 5.
       2.If true, it reverses the string and then converts each character to its ASCII code.
       3.If the length is divisible by 3, it reverses the string.
       4.If the length is divisible by 5, it converts each character to its ASCII code.
       5.It returns the transformed string.
       
   Testing:
   
       Regularly test the implementation with various test cases to ensure it works as expected.  


