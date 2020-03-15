import { RootState } from 'store/store';

export const selectedObjectSelector = (state: RootState) => state.editor.selectedObjectID;

export const sexPositionsSelector = (state: RootState) => state.editor.sexPositions;


