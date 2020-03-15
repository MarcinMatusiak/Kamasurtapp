import { FSA } from 'flux-standard-action';
import { EditorObject } from './reducer';

export const SET_SELECTED_OBJECT = '@editor/SET_SELECTED_OBJECT';
type SetSelectedObjectAction = FSA<typeof SET_SELECTED_OBJECT, number>;

export const SetSelectedObject = (ID: number): SetSelectedObjectAction => ({
    type: SET_SELECTED_OBJECT,
    payload: ID
});

export const SET_SEX_POSITIONS= '@editor/SET_SEX_POSITIONS';
type SetSexPositionsAction = FSA<typeof SET_SEX_POSITIONS, EditorObject[]>;

export const SetSexPositions = (sexPositions: EditorObject[]): SetSexPositionsAction => ({
    type: SET_SEX_POSITIONS,
    payload: sexPositions
});

export type EditorActions = SetSelectedObjectAction 
    | SetSexPositionsAction;
