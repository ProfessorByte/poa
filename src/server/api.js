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
  return query(collection(db, "orderedVideos"), orderBy("sectionId"));
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
  const docs = await getDocs(
    query(collection(db, "bibliografia"), where("id", "==", id))
  );
  return docs;
};

export const getCountBibliography = async () => {
  const count = await getDocs(query(collection(db, "bibliografia")));
  return count.size;
};

export const getSectionsQuery = async (id) => {
  const docs = await getDocs(
    query(collection(db, "orderedVideos"), where("sectionId", "==", id))
  );
  return docs;
};

export const getVocabularioQuery = () => {
  return query(collection(db, "vocabulario"), orderBy("id"));
};
