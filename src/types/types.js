
export const types = {
    // authReducer types
    login: '[Auth] Login',
    logout: '[Auth Logout] Logout',

    // uiReducer types
    // error
    uiSetError: '[UI] Set Error',
    uiRemoveError: '[UI] Remove Error',
    // loading
    uiStartLoading: '[UI] Start Loading',
    uiFinishLoading: '[UI] Finish Loading',

    // notesReducer types
    notesAddNew: '[Notes] New note',
    notesActive: '[Notes] Set active note',
    notesLoad: '[Notes] Load notes',
    notesUpdated: '[Notes] Updated note',
    notesFileUrl: '[Notes] Updated image url',
    notesDelete: '[Notes] Delete note',
    notesLogoutCleaning: '[Notes] Logout Cleaning',

}