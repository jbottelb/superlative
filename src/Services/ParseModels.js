import Parse from "parse";

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
