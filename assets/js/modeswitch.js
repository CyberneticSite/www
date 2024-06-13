// Check if the system prefers dark mode
const systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");

// Get the current theme from session storage
let theme = sessionStorage.getItem('theme');

// Set the initial theme toggle icon based on system preferences
setThemeToggleIcon(systemInitiatedDark.matches);

// Listen for changes to the system's preferred color scheme
systemInitiatedDark.addListener(prefersColorTest);

// Function to handle changes to the system's preferred color scheme
function prefersColorTest(systemInitiatedDark) {
  // Set the theme based on system preferences
  const newTheme = systemInitiatedDark.matches ? 'dark' : 'light';
  setTheme(newTheme);
  // Update the theme toggle icon
  setThemeToggleIcon(systemInitiatedDark.matches);
  // Clear the theme from session storage
  sessionStorage.setItem('theme', '');
}

// Function to handle theme switching
function modeSwitcher() {
  // Get the current theme from session storage
  let theme = sessionStorage.getItem('theme');

  // Toggle the theme based on the current theme
  const newTheme = theme === "dark" ? "light" : "dark";
  setTheme(newTheme);
  // Update the theme toggle icon
  setThemeToggleIcon(newTheme === "dark");
}

// Function to set the theme
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  sessionStorage.setItem('theme', theme);
}

// Function to set the theme toggle icon
function setThemeToggleIcon(isDark) {
  const icon = isDark ? "<i class=\"fa-regular fa-sun mode-toggle sun\"></i> //mode.CyberDay" : "<i class=\"fa-regular fa-moon-stars mode-toggle moon\"></i> //mode.CyberNight" ;
  document.getElementById("theme-toggle").innerHTML = icon;
}

// Set the initial theme based on session storage
if (theme === "dark" || theme === "light") {
  setTheme(theme);
  setThemeToggleIcon(theme === "dark");
}
