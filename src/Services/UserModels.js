import Parse from "parse";

/* 
A bunch of auth functions
*/

// sign up
export const signUp = (email, password) => {
  const user = new Parse.User();

  user.set("username", email);
  user.set("email", email);
  user.set("password", password);

  try {
    let userResult = user.signUp();
    console.log("User signed up", userResult);
  } catch (error) {
    console.error("Error while signing up user", error);
  }
  return email;
};

// log in
export async function login(email, password) {
  let res = "";
  try {
    // Pass the username and password to logIn function
    let user = await Parse.User.logIn(email, password);
    // Do stuff after successful login
    console.log("Logged in user", user);
    res = email;
  } catch (error) {
    console.error("Error while logging in user", error);
    res = "";
    console.log("error");
  }
  console.log(res);

  return res;
}
