import {DetectHistory} from "../core/http-entity";

export class DetectAction {
  static readonly type = '[Detect] Detect';

  constructor(public detectHistory: DetectHistory[]) {
  }
}
