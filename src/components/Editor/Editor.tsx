import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Transformer } from 'react-konva';
import { setLocation } from '../../store/editor/actions';
import { currentSexPositionsSelector } from '../../store/editor/selectors';
import { Circle } from '../Circle';
import { Line } from '../Line';
import { theme } from '../theme';
import { Stage } from './Stage';



export const Editor = () => {
    const dispatch = useDispatch();
    const currentPosition = useSelector(currentSexPositionsSelector);
    const [isDragging, setIsDragging] = useState(false);
    

    return (
        <Stage>
            {currentPosition?.map(({
                location: [x, y], ID, color 
            }) => (
                <Circle
                    ID={ID}
                    key={ID}
                    radius={40} 
                    x={x}
                    y={y}
                    draggable
                    fill={isDragging ? 'red' : color} /* */ //CHANGE COLOR TO PINK??
                    onDragStart={() => {setIsDragging(true)}}
                    onDragEnd={(e: any) => {
                        dispatch(setLocation(ID, [e.target.x(), e.target.y()]));
                        setIsDragging(false);
                    }}
                />
            ))
            }
            <Line
                points={[100,100,100,300]}
                draggable
                stroke={isDragging ? 'red' : theme.colors.main} /* */ //CHANGE COLOR TO PINK??
                strokeWidth={10}
                onDragStart={() => {setIsDragging(true)}}
                onDragEnd={(/*e: any*/) => {
                    //dispatch(setLocation(ID, [e.target.x(), e.target.y()]));
                    setIsDragging(false);
                }}>
            </Line>
            <Transformer
                resizeEnabled={false}
                rotationSnaps={[0,45,90,135,180,225,270,315]}>
            </Transformer>
        </Stage>
    );
};