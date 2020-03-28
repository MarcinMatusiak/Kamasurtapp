import { EditorActions, SET_SELECTED_OBJECT, SET_SEX_POSITION, SET_LOCATION } from './actions';
import { EditorState, EditorObject } from 'store/types';


const defaultState: EditorState = {
    currentSexPosition: [
        {
            ID: 0,
            color: 'black',
            location: [100, 100],
            rotation: 0,
        }
    ],
    selectedObjectID: 0
};

export const editorReducer = (state: EditorState = defaultState, action: EditorActions): EditorState => {
    switch (action.type) {
        case SET_SELECTED_OBJECT: 
            return {
                ...state,
                selectedObjectID: action.payload
            };
        case SET_SEX_POSITION:
            return {
                ...state,
                currentSexPosition: action.payload
            };
        case SET_LOCATION:
            return {
                ...state,
                currentSexPosition: state.currentSexPosition?.map(
                    (obj: EditorObject) => 
                        obj.ID !== action.payload?.id
                        ? obj
                        : { ...obj, location: action.payload?.location}
                )
            }
        default:
            return state;
    }
};