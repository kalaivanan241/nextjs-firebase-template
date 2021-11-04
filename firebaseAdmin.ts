import firebaseAdmin from "firebase-admin";

const googkeCredentials = process.env["GOOGLE_APPLICATION_CREDENTIALS"];
const dataBaseName = process.env["DATABASE_NAME"];

if (!googkeCredentials || !dataBaseName) {
  console.log(
    `Failed to load Firebase credentials. Follow the instructions in the README to set your Firebase credentials inside environment variables.`
  );
}

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.applicationDefault(),
    databaseURL: `https://${dataBaseName}.firebaseio.com`
  });
}

export { firebaseAdmin };