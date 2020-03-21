import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { store } from '../store/store';
import { theme } from './theme';
import Editor from './Editor';

const App: React.FC = () => (
    <BrowserRouter>
        <Provider store={store}>  
            <ThemeProvider theme={theme}>
                <Editor />
            </ThemeProvider>   
        </Provider>
    </BrowserRouter>
);

export default App;