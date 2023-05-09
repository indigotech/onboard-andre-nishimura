import React from 'react';
import { Outlet } from 'react-router-dom';

export const App = (): React.ReactElement => {
  return (
    <div id='app'>
      <Outlet />
    </div>
  );
};
