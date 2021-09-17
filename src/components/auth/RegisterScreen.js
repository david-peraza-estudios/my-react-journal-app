import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { uiRemoveError, uiSetError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui);


    const [formValues, handleInputChange] = useForm({
        name: 'Hernando',
        email: 'nanod@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;


    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(name, email, password, password2);

        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            console.log('Name is required');
            dispatch(uiSetError('Name is required'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(uiSetError('Email is not valid'));
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(uiSetError('Password inputs are incorrect or less than 6 characters'));
            return false;
        }
        dispatch(uiRemoveError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form
                onSubmit={handleRegister}
                className="animate__animated animate__fadeIn animate_faster"
            >
                {
                    // if msgError !== null --> lo muestra
                    msgError &&
                    (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
                }


                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    autoComplete="off"
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    autoComplete="off"
                    onChange={handleInputChange}
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>



                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
