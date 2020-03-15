import { combineReducers, createStore } from 'redux';
import { editorReducer } from './editor/reducer';

export const reducer = combineReducers({
    editor: editorReducer
});

export type RootState = ReturnType<typeof reducer>;

export const store = createStore(reducer);