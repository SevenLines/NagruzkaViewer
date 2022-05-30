import { createRoot } from 'react-dom/client';
import App from './App/App';
import {NagruzkaProvider} from "../store/context";


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <NagruzkaProvider>
      <App />
    </NagruzkaProvider>
);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);