// UserService.js
export class UserService {
  constructor(initialUser) {
    this.user = initialUser;
    this.listeners = new Set();
  }

  getUser() {
    return this.user;
  }

  setUser(newUser) {
    this.user = newUser;
    this.listeners.forEach((cb) => cb(this.user));
  }

  updateSaySomething(message) {
    this.setUser({ ...this.user, saySomeThing: message });
  }

  subscribe(cb) {
    this.listeners.add(cb);
    cb(this.user); // immediately push current state
    return () => this.listeners.delete(cb);
  }
}
