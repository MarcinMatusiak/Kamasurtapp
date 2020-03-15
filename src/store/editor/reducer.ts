import { EditorActions, SET_SELECTED_OBJECT, SET_SEX_POSITIONS } from './actions';


export type Point = [ number, number ];

export type EditorObject = {
    location: Point;
    rotation: number;
    color: string;    
};

export type EditorState = {
    sexPositions?: EditorObject[];
    selectedObjectID?: number;    
};

const defaultState: EditorState = {};

export const editorReducer = (state: EditorState = defaultState, action: EditorActions): EditorState => {
    switch (action.type) {
        case SET_SELECTED_OBJECT: 
            return {
                ...state,
                selectedObjectID: action.payload
            };
        case SET_SEX_POSITIONS:
            return {
                ...state,
                sexPositions: action.payload
            };
        default:
            return state;
    }
};