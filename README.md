# ⏱️ Professional Stopwatch Application

A sleek, responsive, and highly precise digital stopwatch web application built using vanilla HTML, CSS, and JavaScript. This project tracks hours, minutes, seconds, and milliseconds with real-time dynamic lap recording functionality.

---

## 🚀 Features

* High Precision Tracking: Measures time accurately down to milliseconds.
* Dynamic Lap System: Dynamically records and displays lap split times with an automatic scroll-to-bottom view.
* Smart Button Toggling: Controls automatically enable or disable based on the stopwatch state (e.g., Pause/Lap are disabled before starting).
* Fully Responsive UI: A dark-themed layout that adapts beautifully across mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack Used

* HTML: Structured semantic layout for the display panel, control actions, and lap records.
* CSS: Dark-mode styling, responsive grid alignment, smooth transitions, and dynamic micro-interactions.
* JavaScript : Core application state logic using setInterval(), precise delta time calculation using Date.now(), and DOM manipulation.

---

## 📝 How It Works

1. Start: Captures the current exact machine time using Date.now(). It initializes an interval every 10ms to calculate the total elapsed time and updates the display grid dynamically.
2. Pause: Clears the running interval using clearInterval(). It retains the elapsed time in a state variable so that resuming picks up precisely from where it left off.
3. Lap: Captures the exact moment's time string from the active display state, creates a new list element, and appends it to the lap container stack.
4. Reset: Clears all active background calculations, restores the string representation back to default (00:00:00.00), wipes out the tracked lap node tree, and toggles control states back to initial defaults.
