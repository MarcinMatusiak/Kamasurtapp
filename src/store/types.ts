export type Point = [ number, number ];

export type EditorObject = {
    location: Point;
    rotation: number;
    color: string;
    ID: number;   
};

export type SexPosition = EditorObject[];

export type EditorState = {
    currentSexPosition?: SexPosition;
    selectedObjectID?: number;    
};


