import Swal from 'sweetalert2';
import { db } from "../firebase/firebase-config";
import { collection, doc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import { fileUpload } from '../helpers/fileUpload';

// udemy-react-journal


export const startNewNote = () => {
    return async (dispatch, getState) => { //ponemos el async por la promesa de la db
        const { uid } = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        //Como devuelve una promesa hay que usar un ASYNC AWAIT
        // coleccion = collection(base de datos, ruta de la colección )
        // addDoc ( coleccion, documento-objeto de campos- )
        const docRef = await addDoc(
            collection(db, `${uid}/journal/notes`),
            newNote
        );
        // console.log("Document written with ID: ", docRef.id);

        dispatch(activeNote(docRef.id, newNote));
        dispatch(addNewNote(docRef.id, newNote));

    }

}

const addNewNote = ( id, note) => ({
        type: types.notesAddNew,
        payload: {
            id, ...note
        }
});

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: [...notes]
})

// Se encarga de hacer el asyn await de cargar las notas
export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

//Grabar en la DB: usamos el middleware THUNK porque es async
export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        if (!note.url) {
            delete note.url
        }

        //quitar id nota para no guardar en firestore
        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        const notesRef = doc(db, `${uid}/journal/notes/${note.id}`);
        await updateDoc(notesRef, noteToFirestore);
        dispatch(refreshNote(note.id, note));
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your note has been saved',
            showConfirmButton: false,
            timer: 1200
        })
    }
}

//refrescar 1 sola nota
export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id, note
    }
})

export const startUploading = (file) => {
    return async (dispatch, getState) => {

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });

        const activeNote = getState().notes.active;
        const fileUrl = await fileUpload(file);
        console.log(fileUrl);

        activeNote.url = fileUrl;

        dispatch(startSaveNote(activeNote));


        //quitar loading de Swal
        Swal.close();

    }
}


export const startDeleteNote = (id) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        await deleteDoc(doc(db, `${uid}/journal/notes/${id}`));

        dispatch(deleteNote(id));

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your note has been deleted',
            showConfirmButton: false,
            timer: 1200
        })
    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
});


