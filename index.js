// Requiring in the modules that are needed
const electron = require('electron');

const { app, BrowserWindow } = electron;

// Setting the mainwindow global variable to use
let mainWindow;

// Running the ready function for when the app is ready
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: { backgroundThrottlng: false }
  });
  mainWindow.loadURL(`file://${__dirname}/src/index.html`);
});
