import {DetectHistory} from "../core/http-entity";

export class RecognizeAction {

  static readonly type = '[RECOGNIZE] Finish';

  constructor(public recognizeJson: string) {
    
  }

}
