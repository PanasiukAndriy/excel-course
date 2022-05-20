import { defaultStyles } from "../constants";
import { storage } from "../core/utils"

const defaultState = {
    rowState: {},
    colState: {},
    dataState: {}, // format {'1:1': 'sdfsf'}
    currentText: '',
    currentStyles: defaultStyles
}

export const initialState = storage('excel-state') ? storage('excel-state') : defaultState; 