import Parse from "parse";

// contains database functions

/*
 MANIFEST
- Create Form
- Get a form by group Name
- Get a Group ID from a Group name
- Vote on a form with voting data
*/

// create a form
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

// get all froms by a group name
export const GetForm = (GroupName) => {
  const From = Parse.Object.extend("From");
  const query = new Parse.Query(From);

  query.equalTo("GroupName", GroupName);
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

// get ID from form name
export async function getFormID(groupName) {
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
  var og = await getFormID(groupName);
  const id = og[0].id;
  og = og[0].toJSON().data;

  // add votes to the original data by using new data map
  for (var i = 0; i < og.length; i++) {
    const award = og[i]["award"];
    const rec = data[award];

    for (var j = 0; j < og[i]["candidates"].length; j++) {
      // find the correct candidate to increment votes
      if (og[i]["candidates"][j].name === rec) {
        og[i]["candidates"][j].votes += 1;
      }
    } // each candidate
  } // each award

  // now we need to send the data (og) to the db
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
