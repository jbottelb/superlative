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

// get ID from form name
export async function getForm(groupName) {
  const From = Parse.Object.extend("From");
  const query = new Parse.Query(From);
  // You can also query by using a parameter of an object
  query.equalTo("GroupName", groupName);
  const results = await query.find();

  return results;
}

// vote data is a map with all the choices of votes
export async function vote(groupName, data) {
  // get from from name save to og var
  var og = await getForm(groupName);

  const id = og[0].id;

  og = og[0].toJSON().data;

  // add votes to the original data by using new data map
  for (var i = 0; i < og.length; i++) {
    const award = og[i]["award"];
    const rec = data[award];

    for (var j = 0; j < og[i]["candidates"].length; j++) {
      if (og[i]["candidates"][j].name === rec) {
        og[i]["candidates"][j].votes += 1;
      }
    } // each candidate
  } // each award

  // now we need to post og as it has been updated
  // we can use the id we saved
  const query = new Parse.Query("From");
  try {
    const object = await query.get(id);
    object.set("data", og);
    try {
      const response = await object.save();

      console.log("From updated", response);
    } catch (error) {
      console.error("Error while updating From", error);
    }
  } catch (error) {
    console.error("Error while retrieving object From", error);
  }
}
