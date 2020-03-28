import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { store } from '../store/store';
import { theme } from './theme';
import Editor from './Editor';
import { Circle } from './Circle';

const App: React.FC = () => (
    <BrowserRouter>
        <Provider store={store}>  
            <ThemeProvider theme={theme}>
                <Circle idx={5} radius={0} />
            </ThemeProvider>   
        </Provider>
    </BrowserRouter>
);

export default App;