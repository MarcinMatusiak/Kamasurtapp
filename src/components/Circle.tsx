import React from 'react';
import { Circle as KonvaCircle } from 'react-konva';
import { CircleConfig } from 'konva/types/shapes/Circle';
import useSelectObject from './useSelectObject';

type Props = {
    idx: number;
} & CircleConfig;

export const Circle: React.FC<Props> = ({ idx, ...props }) => {
    const selectObject = useSelectObject(idx);
    console.log(selectObject);
    return <KonvaCircle { ... props } onClick={selectObject}></KonvaCircle>
}