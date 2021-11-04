import { FirebaseApp, initializeApp } from "@firebase/app";
import { getAuth, browserSessionPersistence } from "@firebase/auth";
import { Firestore, getFirestore } from "@firebase/firestore";
import React, { createContext } from "react";
import { firebaseConfig } from "./firebaseClient";

type FirebaseClientDBType = null | Firestore;
type FirebaseClientAppType = null | FirebaseApp;

type FirebaseClientContextType = {
  app: FirebaseClientAppType;
  db: FirebaseClientDBType;
};

export const FirebaseClientContext = createContext<FirebaseClientContextType>({
  app: null,
  db: null,
});

const FirebaseClientProvider: React.FC = ({ children }) => {
  const [app, setApp] = React.useState<FirebaseApp | null>(null);
  const [db, setDb] = React.useState<Firestore | null>(null);

  React.useEffect(() => {
    const app = initializeApp(firebaseConfig);
    getAuth().setPersistence(browserSessionPersistence);
    setApp(app);
    setDb(getFirestore(app));
  }, []);

  return (
    <FirebaseClientContext.Provider value={{ app, db }}>
      {app && children}
    </FirebaseClientContext.Provider>
  );
};

export default FirebaseClientProvider;
