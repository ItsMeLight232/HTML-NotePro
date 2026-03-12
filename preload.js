const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('memoriaDesktop', {
  mode: 'desktop-window'
});
