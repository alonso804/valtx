export class StorageService {
  /*
   *  static setEmail(email) {
   *    localStorage.setItem("email", email);
   *  }
   *
   *  static getEmail() {
   *    return localStorage.getItem("email");
   *  }
   *
   *  static removeEmail() {
   *    localStorage.removeItem("email");
   *  }
   */

  // * JWT

  static setJWT(jwt) {
    localStorage.setItem("jwt", jwt);
  }

  static getJWT() {
    return localStorage.getItem("jwt");
  }

  static removeJWT() {
    localStorage.removeItem("jwt");
  }

  // * isLoggedIn

  static isLoggedIn() {
    if (localStorage.getItem("jwt")) {
      return true;
    } else {
      return false;
    }
  }

  static logout() {
    localStorage.removeItem("jwt");
    //localStorage.removeItem("email");
    // localStorage.removeItem('theme'); //FIXME: no me borra bien
  }
}
