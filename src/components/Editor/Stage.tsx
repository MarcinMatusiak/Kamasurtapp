
import { ReactReduxContext, Provider } from 'react-redux';
import { Stage as KonvaStage, Layer } from 'react-konva';
import React from 'react';


export const Stage: React.FC = () => {
    return (
        <ReactReduxContext.Consumer>
            {({ store }) => (
                <KonvaStage
                    width={window.innerWidth}
                    height={window.innerHeight}>
                    <Provider store={store}>
                        <Layer>
                        </Layer>
                    </Provider>
                </KonvaStage>
            )}
        </ReactReduxContext.Consumer>
    )
}