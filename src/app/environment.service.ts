import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor(private state: TransferState, @Inject(PLATFORM_ID) private platformId) {}

  get isBrowser(){
    return isPlatformBrowser(this.platformId);
  }

  get isServer(){
    return isPlatformServer(this.platformId);
  }

  getValueTransferState(key: string) {
    const stateKey = makeStateKey(key);

    let value = this.state.get(stateKey, null as any);
    // try to get value on enviroment
    if (!value) {
      value = environment[key];
    }
    return value;
  }
  setValueTransferState(key: string, payload: any) {
    const stateKey = makeStateKey(key);
    this.state.set(stateKey, payload);
  }
}
