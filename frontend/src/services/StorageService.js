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

  static isLoggedIn() {
    return localStorage.getItem("jwt");
  }

  static logout() {
    localStorage.removeItem("jwt");
  }
}
