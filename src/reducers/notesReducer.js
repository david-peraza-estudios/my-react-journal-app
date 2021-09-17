import { types } from "../types/types";

/*
{
    notes: [],
    active: null,
    active: {
        id:
        title
        body:
        imageUrl:
        date:
    }

}
*/
const initialState = {
    notes: [],
    active: null,
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            }
        case types.notesUpdated:
            // utilizamos el id para refrescar la nota indicada
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id
                        ? action.payload.note
                        : note
                )
            }
        case types.notesDelete:
            return {
                ...state,
                active: null, // Esta nota no puede estar activa porque se está borrando
                notes: state.notes.filter(note => note.id !== action.payload)
            }
        case types.notesLogoutCleaning:
            return {
                ...state,
                active: null,
                notes: []
            }
        case types.notesAddNew:
            return {
                ...state,
                notes: [ action.payload, ...state.notes]
            }

        default:
            return state;
    }
}