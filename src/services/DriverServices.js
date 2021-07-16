import axios from "axios";
import { CommonService } from "./CommonService";
import { StorageService } from "./StorageService";

export class DriverServices {
  static create(driver) {
    return axios.post(`${CommonService.driverUrl}/create-driver`, driver, {
      headers: { "x-access-token": StorageService.getJWT() },
    });
  }

  static get(driverId) {
    return axios.get(`${CommonService.driverUrl}/get-driver/${driverId}`, {
      headers: { "x-access-token": StorageService.getJWT() },
    });
  }

  static getAll() {
    return axios.get(`${CommonService.driverUrl}/get-drivers`, {
      headers: { "x-access-token": StorageService.getJWT() },
    });
  }

  static update(driverId, driver) {
    return axios.put(
      `${CommonService.driverUrl}/update-driver/${driverId}`,
      driver,
      {
        headers: { "x-access-token": StorageService.getJWT() },
      }
    );
  }

  static delete(driverId) {
    return axios.delete(
      `${CommonService.driverUrl}/delete-driver/${driverId}`,
      {
        headers: { "x-access-token": StorageService.getJWT() },
      }
    );
  }
}
