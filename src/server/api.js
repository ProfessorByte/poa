import {
  collection,
  getDocs,
  query,
  orderBy,
  where,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getVideosQuery = () => {
  return query(collection(db, "videos"), orderBy("videoId"));
};

export const getEstadosNivs = async (userid) => {
  const listEstadosNivs = await getDocs(
    query(collection(db, "users"), where("userId", "==", userid))
  );
  return listEstadosNivs;
};
export const updateEstadosNivs = async (userRef, niveles) => {
  await updateDoc(userRef, {
    levels: niveles,
  });
};

export const getBibliographyQuery = () => {
  return query(collection(db, "bibliografia"), orderBy("id"));
};


export const getVocabularioQuery = () => {
  return query(collection(db, "vocabulario"), orderBy("id"));
};