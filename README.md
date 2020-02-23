# React Calendar Application!


## About

The calendar application is built using react, redux & redux-persist. In the future I am going to move storage to a database instead of local storage with redux-persist.

## How it works

Application shows each month and days in that month in the current year. The current month and day have red color, so we can easily see which day and month it is currently. Of course this updates every day when the application is loaded. 

You can click on any day and add notes for that day, like doctors apointment, or a very important test. You can add up to 5 notes for each day. You can also remove notes and add other new ones on the fly. If there is a note on a specific day, that day has a little notifier, so you know there are notes on that day.

## Future improvements

Currently the application is totally usable, and I encourage you to try it and criticize it if you find something that you would've done better, or if you find any bugs.

a) As stated above, I would like to move the redux store to a database and create users & authentication, so the state will be available on every device after you log into your account.
b) I would also like to optimize the app for mobile users. 
c) Lastly, I would also like to implement history and future, so you can set a notification for years ahead or check past notifications.
