import {app, Menu, shell} from "electron";

const isMac = process.platform === 'darwin'

export default (mainWindowHandler) => {
  const template = [
    // { role: 'appMenu' }
    ...(isMac ? [{
      label: app.name,
      submenu: [
        { label: '&Uuml;ber',
          role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    }] : []),
    // { role: 'fileMenu' }
    {
      label: 'Steuerung',
      submenu: [
        {
          label: 'Start/Pause',
          accelerator: 'Space',
          click: async () => {
            mainWindowHandler.browserWindow.webContents.send('remote-command', 'startResumePause')
          },
        },
        {
          label: 'Reset',
          accelerator: 'R',
          click: async () => {
            mainWindowHandler.browserWindow.webContents.send('remote-command', 'reset')
          }
        }
      ]
    },
    // {
    //   label: 'Datei',
    //   submenu: [
    //     isMac ? { label: 'Schliessen', role: 'close' } : { label: 'Schliessen', role: 'quit' }
    //   ]
    // },
    // { role: 'editMenu' }
    // {
    //   label: 'Bearbeiten',
    //   submenu: [
    //     { role: 'undo' },
    //     { role: 'redo' },
    //     { type: 'separator' },
    //     { role: 'cut' },
    //     { role: 'copy' },
    //     { role: 'paste' },
    //     ...(isMac ? [
    //       { role: 'pasteAndMatchStyle' },
    //       { role: 'delete' },
    //       { role: 'selectAll' },
    //       { type: 'separator' },
    //       {
    //         label: 'Speech',
    //         submenu: [
    //           { role: 'startSpeaking' },
    //           { role: 'stopSpeaking' }
    //         ]
    //       }
    //     ] : [
    //       { role: 'delete' },
    //       { type: 'separator' },
    //       { role: 'selectAll' }
    //     ])
    //   ]
    // },
    // { role: 'viewMenu' }
    {
      label: 'Ansicht',
      submenu: [
        //{ role: 'reload' },
        //{ role: 'forceReload' },
        //{ role: 'toggleDevTools' },
        //{ type: 'separator' },
        //{ role: 'resetZoom' },
        //{ role: 'zoomIn' },
        //{ role: 'zoomOut' },
        //{ type: 'separator' },
        { label: 'Vollbild', role: 'togglefullscreen' }
      ]
    },
    // { role: 'windowMenu' }
    {
      label: 'Fenster',
      submenu: [
        { label: 'Minimieren', role: 'minimize' },
        { label: 'Zoom', role: 'zoom' },
        ...(isMac ? [
          { type: 'separator' },
          { role: 'front' },
          { type: 'separator' },
          { role: 'window' }
        ] : [
          { label: 'Schliessen', role: 'close' }
        ])
      ]
    },
    {
      role: 'help',
      label: 'Hilfe',
      submenu: [
        {
          label: 'Entwicklung',
          click: async () => {
            const { shell } = require('electron')
            await shell.openExternal('https://lukaslabor.dev')
          }
        }
      ]
    }
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}
