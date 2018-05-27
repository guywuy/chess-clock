# Chess clock web app.

## Features
- [Three modes](#modes) - Standard, Hourglass and Countdown.
- Select time limit for each player.
- Time remaining is shown on each half.
- Tap/click your half to switch countdown to other player.
- Pause and cancel buttons.
- Switch display orientation option.



### Todo
- Improve timeset input - have hours, minutes and seconds. Make 'scrollable' so dragging up/down changes value up/down.
- Improve 'Time Up' font to make more readable.
- Check app manifest etc and add app icon so that it has appearance of native app. 
- Make settings screen with options for things like performace (no colours, or no gradient at least). Move orientation and sound buttons into this.
- Make 'undo' button for countdown mode, so if clock is pressed accidently or wrongly, can revert to their previous amount of time.
- Remember times previously set so on new match can replay with same time settings.
- Try adding animation using a library like https://popmotion.io/pose/




# Modes
1. __Standard__  
  Each player has a finite amount of time which decreases when it is their turn to move.

2. __Hourglass__  
  Each player has time which decreases when it is their turn but increases when it is the other player's turn.

3. __Countdown__  
  Each player has a finite amount of time to move which is reset each move