import { types } from '../types/types';


export const uiSetError = (err) => ({
    type: types.uiSetError,
    payload: err
})

export const uiRemoveError = () => ({
    type: types.uiRemoveError
})

export const startLoading = () => ({
    type: types.uiStartLoading,
    payload: true
})

export const finishLoading = () => ({
    type: types.uiFinishLoading,
    payload: false
})

