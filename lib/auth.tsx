import { getAuth } from "firebase/auth";
import { firebase } from "./firebase";

export const auth = getAuth(firebase);
