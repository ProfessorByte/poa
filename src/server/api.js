import { collection, query, orderBy } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getVideosQuery = () => {
  return query(collection(db, "videos"), orderBy("videoId"));
};
