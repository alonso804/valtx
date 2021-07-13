import axios from "axios";
import { CommonService } from "./CommonService";

export class UserServices {
  static get(userId) {
    return axios.get(`${CommonService.userUrl}/get-user/${userId}`);
  }
}
