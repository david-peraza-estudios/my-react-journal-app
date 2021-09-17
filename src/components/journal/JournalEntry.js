import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({ id, date, title, body, url }) => {

    const noteDate = moment(date);
    const dispatch = useDispatch();

    const handleEntryClick = () => {
        const newNote = {
            id,
            title,
            body,
            date,
            url
        }
        console.log(newNote);
        dispatch(activeNote(id, newNote));
    }

    return (
        <div
            className="journal__entry pointer animate__animated animate__fadeInDown animate__faster"
            onClick={handleEntryClick}
        >
            {
                url &&
                <div
                    className="journal__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${url})`, //aqui
                    }}
                ></div>
            }

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title /* aqui */}
                </p>
                <p className="journal__entry-content">
                    {body}
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{noteDate.format(`dddd`) /*Dia de la semana */}</span>
                <h4>{noteDate.format(`Do`) /*Número día del mes */}</h4>
            </div>

        </div>
    )
}
