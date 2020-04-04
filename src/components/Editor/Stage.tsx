
import React from 'react';
import { Layer, Stage as KonvaStage } from 'react-konva';
import { Provider, ReactReduxContext } from 'react-redux';


export const Stage: React.FC = ({ children, ...rest }) => {
    return (
        <ReactReduxContext.Consumer>
            {({ store }) => (
                <KonvaStage
                    width={window.innerWidth}
                    height={window.innerHeight}
                    { ...rest }>
                    <Provider store={store}>
                        <Layer>
                            {children}
                        </Layer>
                    </Provider>
                </KonvaStage>
            )}
        </ReactReduxContext.Consumer>
    );
};