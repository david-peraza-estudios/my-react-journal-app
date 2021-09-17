import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector(state => state.notes);

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        //Podriamos establecer un .length para que 
        //  solo tomamos el archivo en la primera posición
        const file = e.target.files[0];

        //Si el usuario no ha dado a cancelar, es que existe el archivo...
        if (file) {
            dispatch(startUploading( file))
        }
    }
    const handleSave = () => {
        dispatch(startSaveNote(active));
    }
    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>
            < input
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: 'none' }}
                onChange={handleFileChange}

            />
            <div>
                <button
                    className="btn"
                    onClick={handlePictureClick}
                >
                    Picture
                </button>

                <button
                    className="btn"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div >
    )
}
