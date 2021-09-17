import React, { useEffect, useRef } from 'react'
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { NotesAppBar } from './NotesAppBar';
import { activeNote, startDeleteNote } from '../../actions/notes';

export const NoteScreen = () => {

    const dispatch = useDispatch();

    //renombramos notes.active a note
    const { active: note } = useSelector(state => state.notes);
    const [formValues, handleInputChange, reset] = useForm(note);


    //useEffect para cambiar por pantalla la nota activa
    const activeId = useRef(note.id);
    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset]);

    //useEffect para actualizar la info de la nota en el store --> notes
    useEffect(() => {
        dispatch(activeNote(formValues.id, { ...formValues }));
    }, [formValues, dispatch]);


    const { title, body, id} = formValues;

    const handleDelete = () => {
        dispatch(startDeleteNote(id));
    }

    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name="body"
                    value={body}
                    onChange={handleInputChange}
                ></textarea>
                {
                    (note.url) &&
                    (
                        <div className="notes__image">
                            <img
                                src={note.url}
                                alt="imagen"
                            />
                        </div>
                    )
                }
                <button
                    className="btn btn-danger"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>

        </div>
    )
}
