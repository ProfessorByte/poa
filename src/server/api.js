import {
  collection,
  getDocs,
  query,
  orderBy,
  where,
  updateDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { db } from "./firebaseConfig";
import { levelsIni } from "../consts/levels";

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
export const addUsers = async (nombre, idUsuario) => {
  console.log("nombre:", nombre, "id:", idUsuario);
  await setDoc(doc(db, "users", idUsuario), {
    name: nombre,
    userId: idUsuario,
    levels: levelsIni[0],
    role: "user",
  });
};

export const createNewUser = (correo, contra, nombre) => {
  console.log(correo, contra, nombre);
  const auth = getAuth();
  let flag = false;
  createUserWithEmailAndPassword(auth, correo, contra)
    .then((userCredential) => {
      flag = true;
      const user = userCredential.user;
      addUsers(nombre, user.uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  return flag;
};
