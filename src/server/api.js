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

export const setUsers = async (nombre, idUsuario) => {
  console.log("nombre:", nombre, "id:", idUsuario);
  await setDoc(doc(db, "users", idUsuario), {
    name: nombre,
    userId: idUsuario,
    levels: levelsIni[0],
  });
};

export const createNewUser = (correo, contra, nombre) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, correo, contra)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      console.log(user.uid);
      setUsers(nombre, user.uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
