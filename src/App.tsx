import classes from './App.module.css';
import React from 'react';
import { DatePicker } from 'antd';

function App() {
  return (
    <div className={classes.app}>
      <div className={classes.main_container}>
        <DatePicker />
      </div>
    </div>
  );
}

export default App;
