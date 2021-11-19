import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
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
