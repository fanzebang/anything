import {Injectable} from '@angular/core';
import {Action, State, StateContext} from '@ngxs/store';
import {LoginAction} from './login.action';

export interface LoginStateModel {
  jwt: string;
}

@State<LoginStateModel>({
  name: 'login',
  defaults: {
    jwt: ''
  }
})
@Injectable()
export class LoginState {
  @Action(LoginAction)
  login(ctx: StateContext<LoginStateModel>, action: LoginAction): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      jwt: action.jwt
    });

  }
}
