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

export const getDocBibliography = async (id) => {
  const doc = await getDocs(
    query(collection(db, "bibliografia"), where("id", "==", id))
  );
  return doc;
};

export const getCountBibliography = async () => {
  const count = await getDocs(query(collection(db, "bibliografia")));
  return count.size;
};
