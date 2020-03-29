import React from 'react';
import { Transformer } from 'react-konva';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from '../../store/editor/actions';
import { currentSexPositionsSelector } from '../../store/editor/selectors';
import { Circle } from '../Circle';
import { Line } from '../Line';
import { theme } from '../theme';
import { Stage } from './Stage';



export const Editor = () => {
    const dispatch = useDispatch();
    const currentPosition = useSelector(currentSexPositionsSelector);

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
                    fill={theme.colors.main} /* isDragging ? theme.colors.main : theme.colors.secondary*/ //CHANGE COLOR TO PINK??
                    //onDragStart={() => { isDragging: true}}
                    onDragEnd={(e: any) => {
                        dispatch(setLocation(ID, [e.target.x(), e.target.y()]))
                        //isDragging: false
                    }}
                />
            ))
            }
            <Line
                points={[100,100,100,300]}
                draggable
                stroke={theme.colors.main}
                strokeWidth={10}>
            </Line>
            <Transformer
                resizeEnabled={false}
                rotationSnaps={[0,45,90,135,180,225,270,315]}>
            </Transformer>
        </Stage>
    );
}