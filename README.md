# Chess clock web app.

## Features
- [Three modes](#modes) - Standard, Hourglass and Countdown.
- Select time limit for each player.
- Time remaining is shown on each half.
- Tap/click your half to switch countdown to other player.
- Pause and cancel buttons.
- Switch display orientation option.
- PWA attributes (add to homescreen, works offline)


### Todo
- Improve timeset input - show formatted time as minutes and seconds. Make 'scrollable' so dragging up/down changes value up/down. Could use a library like - https://github.com/dogfessional/react-swipeable. Even better - mimic Android alarm clock time input - show clock face and allow visual touch input. 
- Make settings screen with options for things like performace (no colours, or no gradient at least). Move orientation and sound buttons into this.
- Add 'Add to homescreen' button and event to settings screen
- Make 'undo' button for countdown mode, so if clock is pressed accidently or wrongly, can revert to their previous amount of time.
- Remember times previously set so on new match can replay with same time settings.
- Try adding animation using a library like https://popmotion.io/pose/.
- Work out how best to handle 'back' press on mobile (without using router/url...). BeforeUnload to confirm? Using PushState and PopState ? - https://stackoverflow.com/a/49719812 could be good solution. Probably better to use React Router, in which case make state with default settings
- Check SetState timing - does it need to run (and therefore render) every 100 milliseconds? Can I reduce computation in render function? Maybe extract render stuff to 'Half' component, as this is the bit that will need it?


## Modes
1. __Standard__  
  Each player has a finite amount of time which decreases when it is their turn to move.

2. __Hourglass__  
  Each player has time which decreases when it is their turn but increases when it is the other player's turn.

3. __Countdown__  
  Each player has a finite amount of time to move which is reset each move