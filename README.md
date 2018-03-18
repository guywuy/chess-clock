# Chess clock web app.

Able to select a time limit for each player.
Time remaining for each is displayed on one half of screen, and touching your half of screen transfers countdown to other player.
Time left reflected in big time display, as well as percentage of border around square (svg dashoffset calculation can be used).
Pause button in the middle to pause both countdowns.


## Technical notes
Use media queries for orientation to figure out where to display time.




### Todo
- Display time remaining visually (either clock hand, border going round, div shrinking, etc)
- Display warning visually when less time remaining - e.g. pulsing flash from 5 mins down - closer to 0 = faster the flash.
- Ability to switch layout - e.g. so displaying on a computer screen can press switch control to have no rotation. (easy via classNames)
- Make time based on 100 milli intervals rather than one second (in state, settings and intervalTimer) so that keeps track of time remaining more accurately
- Add proper end screen
- Feature - hourglass mode - each player starts with a minute - while your time goes down opponent's increases and vice versa.
- Other mode - simple 30 second per turn timer which resets each move.
- Refactor CSS to be cleaner and use css variables