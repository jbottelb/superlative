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
