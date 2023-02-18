import React from 'react';
import classes from './App.module.css';
import EPaths from './components/EPaths/EPaths';

function App() {
  return (
    <section className={classes.app}>
      <EPaths />
      <section>Selected path</section>
    </section>
  );
}

export default App;
