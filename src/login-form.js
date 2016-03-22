


export default class LoginForm {
  constructor(form, email) {
    this.userinfo = [
      { username: `aaron@theironyard.com`, password: `password123` },
      { username: `admin@google.com`, password: `pandas` },
      { username: email, password: `honeycrisp` },
    ];

  }
  validate(username, password) {
    return this.userinfo.reduce((prev, current) => {
      if (current.username === username && current.password === password) {
        return true;
      }

      return prev;
    }, false);
  }
}
