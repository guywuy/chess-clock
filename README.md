# Chess clock web app.

Able to select a time limit for each player.
Time remaining for each is displayed on one half of screen, and touching your half of screen transfers countdown to other player.
Time left reflected in big time display, as well as percentage of border around square (svg dashoffset calculation can be used).
Pause button in the middle to pause both countdowns.


## Technical notes
Use media queries for orientation to figure out where to display time.




### Todo
- React to timer reaching 0 - After alert, reset game.
- Format seconds display to have 0 if less than 10
- Display time remaining visually (either clock hand, border going round, div shrinking, etc)
- Display warning visually when less time remaining - e.g. pulsing flash from 5 mins down - closer to 0 = faster the flash.
- Add ability to set each time with separate compenent
- Different font for time.
- Ability to switch layout - e.g. so displaying on a computer screen can press switch control to have no rotation. (easy via classNames)
- Maybe add opponents time smaller under your time.