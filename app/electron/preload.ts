import { ipcRenderer, contextBridge } from 'electron'

// --------- Expose some API to the Renderer process ---------

contextBridge.exposeInMainWorld('api', {
  pingPong: (message: string) => ipcRenderer.invoke('ping-pong', message),
});