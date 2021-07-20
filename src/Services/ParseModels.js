import Parse from "parse";
import ParseUser from "parse";

// contains database functions

//create a form
export const createForm = (GroupName, password, candidates, data, creator) => {
  const myNewObject = new Parse.Object("From");
  myNewObject.set("GroupName", GroupName);
  myNewObject.set("Password", password);
  myNewObject.set("candidates", candidates);
  myNewObject.set("data", data);
  myNewObject.set("Creator", creator);
  try {
    const result = myNewObject.save();
    // Access the Parse Object attributes using the .GET method
    console.log("From created", result);
  } catch (error) {
    console.error("Error while creating From: ", error);
  }
};

// get all froms by a groupID
export const GetForm = (GroupID) => {
  const From = Parse.Object.extend("From");
  const query = new Parse.Query(From);

  query.equalTo("GroupName", GroupID);
  const results = query.find();
  try {
    const results = query.find();
    for (const object of results) {
      // Access the Parse Object attributes using the .GET method
      const GroupName = object.get("GroupName");
      const Password = object.get("Password");
      const data = object.get("data");
      const Creator = object.get("Creator");
      console.log(GroupName);
      console.log(Password);
      console.log(data);
      console.log(Creator);
    }
  } catch (error) {}
  return results;
};

// adds votes to the form
export const UpdateForm = (GroupID, votes) => {
  const query = new Parse.Query("MyCustomClassName");
  try {
    // here you put the objectId that you want to update
    const object = query.get("xKue915KBG");
    object.set("myCustomKey1Name", "new value");
    try {
      const response = object.save();
      // You can use the "get" method to get the value of an attribute
      // Ex: response.get("<ATTRIBUTE_NAME>")
      // Access the Parse Object attributes using the .GET method
      console.log(response.get("myCustomKey1Name"));
      console.log("MyCustomClassName updated", response);
    } catch (error) {
      console.error("Error while updating ", error);
    }
  } catch (error) {
    console.error("Error while retrieving object ", error);
  }
};

// gets form by id. Currently not used
export const getById = (id) => {
  const Lesson = Parse.Object.extend("Lesson");
  const query = new Parse.Query(Lesson);
  return query.get(id).then((result) => {
    // return Lesson object with objectId: id
    return result;
  });
};

// sign up
export const vote = (groupName, data) => {
  const query = new Parse.Query(From);
  try {
    // here you put the objectId that you want to update
    const object = query.get("xKue915KBG");
    object.set("GroupName", "A string");
    object.set("Password", "A string");
    object.set("data", [1, "a string"]);
    object.set("Creator", "A string");
    object.set("candidates", [1, "a string"]);
    object.set("Candidates", [1, "a string"]);
    try {
      const response = object.save();
      // You can use the "get" method to get the value of an attribute
      // Ex: response.get("<ATTRIBUTE_NAME>")
      // Access the Parse Object attributes using the .GET method
      console.log(response.get("GroupName"));
      console.log(response.get("Password"));
      console.log(response.get("data"));
      console.log(response.get("Creator"));
      console.log(response.get("candidates"));
      console.log(response.get("Candidates"));
      console.log("From updated", response);
    } catch (error) {
      console.error("Error while updating From", error);
    }
  } catch (error) {
    console.error("Error while retrieving object From", error);
  }
};
