import { defaultStyles } from "../constants";
import { storage } from "../core/utils"

const defaultState = {
    rowState: {},
    colState: {},
    dataState: {}, // format {'1:1': 'sdfsf'}
    styleState: {},
    currentText: '',
    currentStyles: defaultStyles
}

const normalize = state =>({
    ...state,
    currentStyles: defaultState,
    currentText: ''
}) 

export const initialState = storage('excel-state') ? normalize(storage('excel-state')) : defaultState; 