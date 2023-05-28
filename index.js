const { app, BrowserWindow } = require('electron')

try {
  require('electron-reloader')(module)
} catch (_) {}

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})
