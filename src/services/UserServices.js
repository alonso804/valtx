import axios from "axios";
import { CommonService } from "./CommonService";
import { StorageService } from "./StorageService";

export class UserServices {
  static get(userId) {
    return axios.get(`${CommonService.userUrl}/get-user/${userId}`, {
      headers: { "x-access-token": StorageService.getJWT() },
    });
  }
}
