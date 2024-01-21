import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase/base";
import { Detail, Folders, ImageProp, ProjectDetail } from "../models/models";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export const uploadImage = async (
  folder: Folders,
  name: string,
  image: ImageProp
) => {
  const imageRef = ref(storage, `${folder.folder}/${name}`);
  if (!image?.files) return;
  try {
    await uploadBytes(imageRef, image.files);
    const imageUrl = getDownloadURL(imageRef).then((url) => {
      return url;
    });
    return imageUrl;
  } catch (err) {
    throw new Error(`${err}`);
  }
};

export const getDataFromDataBase = async (folder: Folders) => {
  try {
    const ref = doc(db, "portfolio", folder.folder);
    const getData = await getDoc(ref);
    if (!getData.exists()) throw new Error("Document doesnt exist");
    const data = getData.data();
    return data;
  } catch (err) {
    throw new Error("Error while fetching data from Database.");
  }
};

export const updateDataInDataBase = async (
  folder: Folders,
  content: Detail | ProjectDetail
) => {
  const ref = doc(db, "portfolio", folder.folder);
  await updateDoc(ref, { data: arrayUnion(content) });
};

export const removeDataFromDataBase = async (
  folder: Folders,
  detail: Detail
) => {
  const ref = doc(db, "portfolio", folder.folder);
  await updateDoc(ref, { data: arrayRemove(detail) });
};

export const getCVData = async () => {
  try {
    const cvRef = ref(storage, "cv/Aayush.pdf");
    const docRef = doc(db, "portfolio", "cv");
    if (!cvRef || !docRef) return;
    const url = await getDownloadURL(cvRef).then((url) => url);
    await setDoc(docRef, { file: url });
    return url;
  } catch (err) {
    console.error(err);
  }
};
