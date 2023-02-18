import App from '../App';
import React from 'react';
import { RouteNames } from './RouteNames';

export default [
  {
    path: RouteNames.Home,
    element: <App />,
  },
  {
    path: RouteNames.Import,
    element: <div>main</div>,
  },
];
