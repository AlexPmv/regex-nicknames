export default class Validator {
  static validateUsername(username) {
    return /^[^\d_-]([a-zA-Z\-_]+\d{0,3})+[^\d_-]$/.test(username);
  }
}
