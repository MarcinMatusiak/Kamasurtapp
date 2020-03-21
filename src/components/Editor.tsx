import React from 'react'
import { setPosition } from '../store/editor/actions'
import { Circle } from './Circle'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { currentSexPositionsSelector } from '../store/editor/selectors'
import { Stage, Layer } from 'react-konva'

const Button = styled.button`
    color: ${props =>  props.theme.colors.main};
    border: ${props => props.theme.borderRadius} solid ${props => props.theme.colors.main};
`;

export default () => {
    const dispatch = useDispatch();
    const currentPosition = useSelector(currentSexPositionsSelector);

    return (
        <>
            <Button>button</Button>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    {currentPosition?.map(({ location: [x, y], ID, color}) => (
                        <Circle
                            key={ID}
                            radius={40} 
                            x={x}
                            y={y}
                            draggable
                            fill={color}
                            onDragEnd={(e: any) => {
                                dispatch(setPosition(ID, [e.target.x(), e.target.y()]))
                            }}
                        />
                    ))}
                </Layer>
            </Stage>
        </>
    );
}