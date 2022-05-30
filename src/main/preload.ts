import {dialog, contextBridge, ipcRenderer, IpcRendererEvent} from 'electron';
import {loadXls} from './xlsx_processing';
import {NagruzkaLine} from "../types";

export type Channels = 'ipc-example';

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    sendMessage(channel: Channels, args: unknown[]) {
      ipcRenderer.send(channel, args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => ipcRenderer.removeListener(channel, subscription);
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
  openFile(options: any) {
    return ipcRenderer.invoke('dialog:openFile', options)
  },
  saveFile(options: any) {
    return ipcRenderer.invoke('dialog:saveFile', options)
  },
  userRead() {
    return ipcRenderer.invoke("user:read")
  },
  userWrite(config: any) {
    return ipcRenderer.invoke("user:write", config)
  },
  async saveNagruzka(f: string, nagruzkaLines: Array<NagruzkaLine>) {
    return ipcRenderer.invoke("nagruzka:save", f, nagruzkaLines)
  },
  async loadNagruzka(f: string): Promise<Array<NagruzkaLine>> {
    return ipcRenderer.invoke("nagruzka:load", f)
  },
  loadXls,
});
