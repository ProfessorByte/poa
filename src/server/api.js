import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getVideos = async () => {
  const listVideos = await getDocs(
    query(collection(db, "videos"), orderBy("videoId"))
  );
  return listVideos;
};

export const getEstadosNivs = async (userid) => {
  const listEstadosNivs = await getDocs(
    query(collection(db, "users"),where("userId","==",userid))
  );
  return listEstadosNivs;
};