import { RootState } from 'store/store';

export const selectedObjectSelector = (state: RootState) => state.editor.selectedObjectID;

export const currentSexPositionsSelector = (state: RootState) => state.editor.currentSexPosition;

export const currentObjectSelector = (state: RootState) => state.editor.currentSexPosition![state.editor.selectedObjectID!];
