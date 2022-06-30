import { defaultStyles, defaultTitle } from "../constants";
import { clone, storage } from "../core/utils"

const defaultState = {
    title: defaultTitle,
    rowState: {},
    colState: {},
    dataState: {}, // format {'1:1': 'sdfsf'}
    stylesState: {},
    currentText: '',
    currentStyles: defaultStyles,
    openedDate: new Date().toJSON()
}

const normalize = state =>({
    ...state,
    currentStyles: defaultStyles,
    currentText: ''
}) 

export function normalizeInitialState(state){
    return state ? normalize(state) : clone(defaultState) 
}