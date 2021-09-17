import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { startLoadingNotes } from '../actions/notes';


export const AppRouter = () => {

    const [checking, setChecking] = useState({ loading: true });
    const [isLoggedIn, setIsLoggedIn] = useState({ loggedIn: false });

    const dispatch = useDispatch();

    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {

                console.log(user);
                dispatch(login(user.uid, user.displayName));

                setIsLoggedIn({ loggedIn: true }); // Usuario ha logeado

                dispatch(startLoadingNotes( user.uid));

            } else {
                console.log('user has signed out');
                setIsLoggedIn({ loggedIn: false });
            }

            // Mientras esperamos a que empiece la respuesta del observable --> checking false
            setChecking({ loading: false });

        });
    }, [dispatch, setChecking, setIsLoggedIn]);

    if (checking.loading) { //si está comprobando--> pantalla cargando, si no--> router: /login
        return (
            <h1> Checking...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        isAuthenticated={isLoggedIn.loggedIn}
                        path="/auth"
                        component={AuthRouter}
                    />

                    <PrivateRoute
                        isAuthenticated={isLoggedIn.loggedIn}
                        exact
                        path="/"
                        component={JournalScreen}
                    />

                    <Redirect to="/auth/login" />


                </Switch>

            </div>
        </Router>
    )
}
