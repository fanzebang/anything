import {Inject, Injectable} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Injectable()
export class FfdecWasmLoaderService {
  private _scriptLoadingPromise: Promise<void>;

  protected readonly _SCRIPT_ID: string = 'ffdec-wasm-script';

  constructor(@Inject(DOCUMENT) private _document) {

  }

  load(): Promise<void> {
    const winRef = window as any;
    if (winRef.ffdecjs) {
      console.log('window 中已经有ffdecjs对象了');
      return Promise.resolve();
    }

    if (this._scriptLoadingPromise) {
      return this._scriptLoadingPromise;
    }

    const scriptOnPage = this._document.getElementById(this._SCRIPT_ID);

    if (scriptOnPage) {
      this._assignScriptLoadingPromise(scriptOnPage);
      return this._scriptLoadingPromise;
    }

    const script = this._document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.id = this._SCRIPT_ID;
    script.src = 'assets/ffdec-1.0.0.min.js';
    this._assignScriptLoadingPromise(script);
    this._document.body.appendChild(script);
    return this._scriptLoadingPromise;
  }

  private _assignScriptLoadingPromise(scriptElem: HTMLElement) {
    this._scriptLoadingPromise = new Promise<void>((resolve: Function, reject: Function) => {

      scriptElem.onload = () => {
        resolve();
      }

      scriptElem.onerror = (error: Event) => {
        reject(error);
      };
    });
  }
}
