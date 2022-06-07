import { Expression } from "@angular/compiler";
import {Injectable} from "@angular/core";
import {Action, State, StateContext} from "@ngxs/store";
import {RecognizeAction} from "./recognize.action";

export interface RecognizeStateModel {
  recognizeJson: string;
}


@State<RecognizeStateModel>({
  name: 'recognize',
  defaults: {
    recognizeJson: null
  }
})

@Injectable()
export class RecognizeState {
  @Action(RecognizeAction)
  recognize(ctx: StateContext<RecognizeStateModel>, action: RecognizeAction): void {
    console.log('RecognizeAction is :', action);
    let detectResult =  JSON.parse(localStorage.getItem("detectResult"))

    try{
      detectResult.push(action.recognizeJson)
    }catch(e){
      setTimeout(()=>{
        detectResult.push(action.recognizeJson)
      },1000)
      
    }
   
    // localStorage.setItem("detectResult",JSON.stringify(detectResult))
    const state = ctx.getState();
    ctx.setState({
      ...state,
      recognizeJson: action.recognizeJson
    })
  }
}
