import { storage } from "../core/utils"

const defaultState = {
    rowState: {},
    colState: {},
    dataState: {}, // format {'1:1': 'sdfsf'}
    currentText: ''
}

export const initialState = storage('excel-state') ? storage('excel-state') : defaultState; 