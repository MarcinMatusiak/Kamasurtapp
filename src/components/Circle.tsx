import React from 'react';
import { Circle as KonvaCircle } from 'react-konva';
import { CircleConfig } from 'konva/types/shapes/Circle';

export const Circle: React.FC<CircleConfig>= (props) => <KonvaCircle { ... props }></KonvaCircle>