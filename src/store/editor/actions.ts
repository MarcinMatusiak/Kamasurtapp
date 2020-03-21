import { FSA } from 'flux-standard-action';
import { Point, EditorObject, SexPosition } from '../types';


export const SET_POSITION = '@editor/SET_POSITION';
type SetPositionAction = FSA<typeof SET_POSITION, {id: number; position: Point}>

export const setPosition = (id: number, position: Point): SetPositionAction => ({
    type: SET_POSITION,
    payload: {
        id,
        position
    }
})
// TODO: change position to location
export const SET_SELECTED_OBJECT = '@editor/SET_SELECTED_OBJECT';
type SetSelectedObjectAction = FSA<typeof SET_SELECTED_OBJECT, number>;

export const setSelectedObject = (ID: number): SetSelectedObjectAction => ({
    type: SET_SELECTED_OBJECT,
    payload: ID
});

export const SET_SEX_POSITION= '@editor/SET_SEX_POSITION';
type SetSexPositionAction = FSA<typeof SET_SEX_POSITION, SexPosition>;

export const setSexPositions = (sexPositions: SexPosition): SetSexPositionAction => ({
    type: SET_SEX_POSITION,
    payload: sexPositions
});

export type EditorActions = SetSelectedObjectAction 
    | SetSexPositionAction
    | SetPositionAction;
