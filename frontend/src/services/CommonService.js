export class CommonService {
  static baseUrl = process.env.REACT_APP_SERVER_URL;
  static signinUrl = CommonService.baseUrl + "/api/auth/signin?";
  static signupUrl = CommonService.baseUrl + "/api/auth/signup";
}
