export class StorageService {
  static setJWT(jwt) {
    localStorage.setItem("jwt", jwt);
  }

  static getJWT() {
    return localStorage.getItem("jwt");
  }

  static removeJWT() {
    localStorage.removeItem("jwt");
  }

  static setUserId(userId) {
    localStorage.setItem("userId", userId);
  }

  static getUserId() {
    return localStorage.getItem("userId");
  }

  static removeUserId() {
    localStorage.removeItem("userId");
  }

  static isLoggedIn() {
    return localStorage.getItem("jwt") && localStorage.getItem("userId");
  }

  static logout() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("userId");
  }
}
