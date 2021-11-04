import React, { useContext } from "react";
import { FirebaseClientContext } from "../FirebaseClientProvider";

const useFirebase = () => {
  return useContext(FirebaseClientContext);
};

export default useFirebase;
