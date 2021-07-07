import axios from "axios";
import { CommonService } from "./CommonService";

export class DriverServices {
  static create(driver) {
    return axios.post(`${CommonService.driverUrl}/create-driver`, driver);
  }

  static get(driverId) {
    return axios.get(`${CommonService.driverUrl}/get-driver/${driverId}`);
  }

  static getAll() {
    return axios.get(`${CommonService.driverUrl}/get-drivers`);
  }

  static update(driverId, driver) {
    return axios.put(
      `${CommonService.driverUrl}/update-driver/${driverId}`,
      driver
    );
  }

  static delete(driverId) {
    return axios.delete(`${CommonService.driverUrl}/delete-driver/${driverId}`);
  }
}
