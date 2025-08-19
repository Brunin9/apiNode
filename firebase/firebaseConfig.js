const admin = require("firebase-admin");
const serviceAccount = require("./api-progint-firebase-adminsdk-fbsvc-e115d99914.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://SEU-PROJETO-ID.firebaseio.com"
});

const db = admin.firestore();
module.exports = db;

