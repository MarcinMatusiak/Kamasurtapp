import { FSA } from 'flux-standard-action';
import { Point, SexPosition } from '../types';


export const SET_LOCATION = '@editor/SET_LOCATION';
type SetLocationAction = FSA<typeof SET_LOCATION, {id: number; location: Point}>

export const setLocation = (id: number, location: Point): SetLocationAction => ({
    type: SET_LOCATION,
    payload: {
        id,
        location
    }
});

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
    | SetLocationAction;
