const AuthCheck = {
  flag: false,
  authenticate() {
    this.flag = true;
  },
  signout() {
    this.flag = false;
  },
  getAuth() {
    return this.flag;
  }
};
export default AuthCheck;
