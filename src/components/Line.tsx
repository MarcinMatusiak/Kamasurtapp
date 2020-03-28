import React from 'react';
import {Line as KonvaLine, Transformer} from 'react-konva';
import { LineConfig } from 'konva/types/shapes/Line';


export const Line: React.FC<LineConfig> = (props) => (
    <KonvaLine {...props}></KonvaLine>
)