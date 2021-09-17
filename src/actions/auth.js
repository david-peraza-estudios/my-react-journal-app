import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile, signOut } from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';
import Swal from 'sweetalert2';

// Variable AUTH de Firebase --> v8 es firebase.auth();
const auth = getAuth();

// Esta es la ACTION que vamos a llamar cuando tengamos el uid y el displayName
// como el return va a ir al Reducer, usamos los types y el payload
export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName,
    }
});



export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                // Signed in

                //como displayName va a ser null, le asignamos el name del formulario de registro
                await updateProfile(auth.currentUser, { displayName: name });

                //y hacemos login después del registro para actualizar el state
                dispatch(login(user.uid, user.displayName));
                console.log(user);
                // ...
            })
            .catch((err) => {
                const errorCode = err.code;
                console.log(errorCode);
                const errorMessage = err.message;
                console.log(errorMessage);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.message,
                  });
                // ..
            });
    }
}

export const startLoginEmailPassword = (email, password) => {

    return (dispatch) => {

        dispatch(startLoading());

        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.message,
                  });
            })
            .finally(() => {
                dispatch(finishLoading());
            })

    };
}



export const startGoogleLogin = () => {
    return (dispatch) => {
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            });
    }
}

const logout = () => ({
    type: types.logout
});

const notesLogout = () => ({
    type: types.notesLogoutCleaning,
})

export const startLogout = () => {
    return ( dispatch) => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(logout()); // => authReducer

            //Purgar notas del store => notesReducer
            dispatch(notesLogout());

          }).catch((error) => {
            // An error happened.
          });
    }
};