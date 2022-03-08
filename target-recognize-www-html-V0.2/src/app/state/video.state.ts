import {Injectable} from "@angular/core";
import {Action, State, StateContext} from "@ngxs/store";
import {VideoAction} from "./video.action";

export interface VideoStateModel {
  video: File;
}

@State<VideoStateModel>({
  name: 'video',
  defaults: {
    video: null
  }
})
@Injectable()
export class VideoState {

  @Action(VideoAction)
  video(ctx: StateContext<VideoStateModel>, action: VideoAction): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      video: action.video
    });
  }
}
