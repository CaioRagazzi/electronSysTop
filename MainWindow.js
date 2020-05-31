const { BrowserWindow } = require('electron')

class MainWindow extends BrowserWindow {
  constructor(file, isDev) {
    super({
      title: 'SysTop',
      width: isDev ? 800 : 355,
      height: 600,
      icon: './assets/icons/icon.png',
      resizable: isDev ? true : false,
      backgroundColor: 'white',
      opacity: 0.9,
      webPreferences: {
        nodeIntegration: true,
      },
    })

    this.loadFile(file)

    if (isDev) {
      this.webContents.openDevTools()
    }
  }
}

module.exports = MainWindow