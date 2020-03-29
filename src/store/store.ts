import { combineReducers, createStore } from 'redux';
import { editorReducer } from './editor/reducer';

export const reducer = combineReducers({
    editor: editorReducer
});

export type RootState = ReturnType<typeof reducer>;

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: Function;
    }
}

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__());