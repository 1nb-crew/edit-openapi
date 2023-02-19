import React from 'react';
import { RouteNames } from './RouteNames';
import StartPage from '../views/StartPage/StartPage';

export default [
  {
    path: RouteNames.Home,
    element: <StartPage />,
  },
  {
    path: RouteNames.Import,
    element: <div>main</div>,
  },
];
