import {Injectable} from "@angular/core";
import {Action, State, StateContext} from "@ngxs/store";
import {RenameSampleOssTypeAction} from "./rename-sample-oss-type.action";

export interface RenameSampleOssTypeStateModel {
  name: string
}

@State<RenameSampleOssTypeStateModel>({
  name: 'rename',
  defaults: {
    name: ''
  }
})
@Injectable()
export class RenameSampleOssTypeState {

  @Action(RenameSampleOssTypeAction)
  rename(ctx: StateContext<RenameSampleOssTypeStateModel>, action: RenameSampleOssTypeAction): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      name: action.name
    });
  }
}
