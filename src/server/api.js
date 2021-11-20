import {
  collection,
  getDocs,
  query,
  orderBy,
  where,
  doc,
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
export const setEstadosNivs = async (idUsuario, niveles) => {
  const xd = doc(db, "users", idUsuario);
  await updateDoc(xd, {
    levels: niveles,
  });
};
