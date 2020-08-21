The HTML template for this app was created using BootStrap templates.
The design was customized using CSS.
JQuery and Javascript were used for functionality.
Moment.Js was used to get the current date and time for display.

Overall Project Goals:

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
    - additionally the time of the day is also displayed
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    - if it is in the past, it is tinted red
    - current time block is tinted in yellow
    - future time blocks are tinted in red
    - additionally the current hour block is displayed in the console log 
    - console log also prints out the time status of each hour block
WHEN I click into a timeblock
    - when you enter a time block it will turn yellow
    - there is a hover property in each line to ensure that you are aligned to the desired timeblock
THEN I can enter an event
    - when the user leaves the timeblock, it will change to green
WHEN I click the save button for that timeblock
    - click the submit button or press enter
    - nothing is saved if you dont
THEN the text for that event is saved in local storage
WHEN I refresh the page
    - When the page is refreshed the color coding of red, yellow and green tint based on time will reapply
    - yellow and dark green indicators of text box modifications will go away.
THEN the saved events persist
WHEN you want to reset the day so you can have a clean calendar the following day
    - click the Red reset button and all the information will go away


Link to an image of the app: ./images/dailyPlanner.png
Link to the app: https://kkaraman.github.io/dailyPlanner/
Link to the code: https://github.com/KKaraman/dailyPlanner
    