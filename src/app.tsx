import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export const App = (): React.ReactElement => {
  return (
    <div id='app'>
      <ThemeProvider theme={theme}>
        <Outlet />
      </ThemeProvider>
    </div>
  );
};
