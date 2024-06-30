const root = document.querySelector("root");
const modeSwitch = document.querySelector(".light-mode-switch");
const modeSwitchIcon = modeSwitch.firstElementChild;
const modeMatch = window.matchMedia("(prefers-color-scheme: dark)")
const body = document.body;

let switchState = "dark";
let lightMode = "light";

/**
 * @param {boolean} mode
 */
function updateLightMode(mode) {
  modeName = mode ? "dark" : "light";
  if (modeName === lightMode)
    return
  console.log(`updateLightMode: prev ${lightMode}, cur ${modeName}`);
  updateSwitchState();
  body.classList.toggle("dark-mode");
  lightMode = modeName;
}

function switchLightMode() {
  switch (lightMode) {
    case "light":
      mode = true;
      break;
    case "dark":
      mode = false;
      break;
  }
  updateLightMode(mode);
}

function updateSwitchState() {
  switch (lightMode) {
    case "light":
      switchState = "dark";
      token = "fa-moon", newToken = "fa-sun";
      break;
    case "dark":
      switchState = "light";
      token = "fa-sun", newToken = "fa-moon";
      break;
  }

  modeSwitchIcon.classList.replace(token, newToken);
}

updateLightMode(modeMatch.matches)

modeMatch.addEventListener("change",
  event => {
    updateLightMode(event.matches)
});

modeSwitch.addEventListener("click", () => {
  switchLightMode();
});
