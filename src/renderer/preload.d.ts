import { Channels } from 'main/preload';
import {NagruzkaConfig, NagruzkaLine} from '../types';

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        sendMessage(channel: Channels, args: unknown[]): void;
        on(
          channel: string,
          func: (...args: unknown[]) => void
        ): (() => void) | undefined;
        once(channel: string, func: (...args: unknown[]) => void): void;
      };
      loadXls(filename: string, sem: number): Promise<Array<NagruzkaLine>>;
      openFile(options: any): any;
      userRead(): any;
      userWrite(config: NagruzkaConfig): any;
      selectAndLoadXls(): Promise<Array<NagruzkaLine>>;
      saveNagruzka(f: string, nagruzkaLines: Array<NagruzkaLine>): void;
      loadNagruzka(f: string): Promise<Array<NagruzkaLine>>;
    };
  }
}

export {};
