import { CHANGE_TEXT, CHANGE_STYLES, TABLE_RESIZE, APPLY_STYLE } from "./types";

//action creator
export function tableResize(data){
    return {
        type: TABLE_RESIZE,
        data
    }
}



export function changeText(data){
    return {
        type: CHANGE_TEXT,
        data
    }
}

export function changeStyles(data){
    return {
        type: CHANGE_STYLES,
        data
    }
}

// value and ids
export function applyStyle(data){
    return {
        type:APPLY_STYLE,
        data
    }
}