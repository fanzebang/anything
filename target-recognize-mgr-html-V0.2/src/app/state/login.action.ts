export class LoginAction {
  static readonly type = '[User] Login';

  constructor(public jwt: string) {
  }
}
