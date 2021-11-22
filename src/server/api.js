import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getVideos = async () => {
  const listVideos = await getDocs(
    query(collection(db, "videos"), orderBy("videoId"))
  );
  return listVideos;
};

export const getBibliographyQuery = () => {
  return query(collection(db, "bibliografia"), orderBy("id"));
};
