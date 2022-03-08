import {Injectable} from "@angular/core";
import {Action, State, StateContext} from "@ngxs/store";
import {DetectHistory} from "../core/http-entity";
import {DetectAction} from "./detect.action";

export interface DetectStateModel {
  detectHistory: DetectHistory[];
}

@State<DetectStateModel>({
  name: 'detect',
  defaults: {
    detectHistory: []
  }
})
@Injectable()
export class DetectState {
  @Action(DetectAction)
  detect(ctx: StateContext<DetectStateModel>, action: DetectAction): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      detectHistory: action.detectHistory
    });
  }
}
