import { doc, getDoc } from "firebase/firestore";
import { db } from "./base";

export const getDataFromDataBase = async (folder: "skills" | "projects") => {
  try {
    const ref = doc(db, "portfolio", folder);
    const getData = await getDoc(ref);
    if (!getData.exists()) throw new Error("Document doesnt exist");
    const data = getData.data();
    return data;
  } catch (err) {
    throw new Error("Error while fetching data from Database.");
  }
};
