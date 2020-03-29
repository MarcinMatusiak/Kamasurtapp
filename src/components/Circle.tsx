import React from 'react';
import { Circle as KonvaCircle } from 'react-konva';
import { CircleConfig } from 'konva/types/shapes/Circle';
import useSelectObject from './useSelectObject';

type Props = {
    ID: number;
} & CircleConfig;

export const Circle: React.FC<Props> = ({ ID, ...props }) => {
    const selectObject = useSelectObject(ID);
    return <KonvaCircle { ... props } onClick={selectObject}></KonvaCircle>
}