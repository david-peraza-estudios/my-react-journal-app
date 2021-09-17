import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export const loadNotes = async (uid) => { //uid de notes para contruir el path

    const querySnapshot = await getDocs(collection(db, `${uid}/journal/notes`));
    const notes = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        //cada note la agregamos a notes[]
        notes.push({
            id: doc.id,
            ...doc.data()
        });

    });

    console.log(notes);
    return notes;
}
