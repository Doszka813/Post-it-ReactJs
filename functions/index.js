const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => {
      console.log("notification added", doc);
    });
};

exports.boardAdded = functions.firestore
  .document("boards/{boardId}")
  .onCreate(doc => {
    const board = doc.data();
    const notification = {
      content: "added a new board",
      user: `${board.authorFirstName} ${board.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };

    return createNotification(notification);
  });

exports.userJoined = functions.auth.user().onCreate(user => {
  return admin.firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then(doc => {
      const newUser = doc.data();
      const notification = {
        content: "joined group",
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
      };
      return createNotification(notification);
    });
});
