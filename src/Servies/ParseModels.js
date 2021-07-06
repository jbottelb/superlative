import Parse from "parse";

// contains database functions

//create a form
export const createForm = (GroupName, password, candidates, data, creator) => {
  const myNewObject = new Parse.Object("From");
  myNewObject.set("GroupName", GroupName);
  myNewObject.set("Password", password);
  myNewObject.set("Candidates", candidates);
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
  } catch (error) {
    console.error("Error while fetching From", error);
  }
  return results;
};
