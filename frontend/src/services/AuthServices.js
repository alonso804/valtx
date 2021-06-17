import axios from "axios";
import { CommonService } from "./CommonService";
import { StorageService } from "./StorageService";

export class AuthServices {
  static signin(user) {
    return axios.post(CommonService.signinUrl, user);
  }

  static signup(user) {
    return axios.post(CommonService.signupUrl, user);
  }

  static logout() {
    StorageService.logout();
  }
}
