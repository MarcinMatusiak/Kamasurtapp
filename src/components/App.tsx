import React from 'react';
import { BrowserRouter } from "react-router-dom";

import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export const Button = styled.button`
    color: ${props =>  props.theme.colors.main};
    border: ${props => props.theme.borderRadius} solid ${props => props.theme.colors.main};
`;

const App: React.FC = () => {
    return (
    <BrowserRouter>
        <div>  
            <ThemeProvider theme={theme}>
                <Button>button</Button>
            </ThemeProvider>   
        </div>
    </BrowserRouter>
)};

export default App;