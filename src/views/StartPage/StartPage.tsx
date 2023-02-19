import React from 'react';
import classes from './style.module.css';
import PathsList from './PathsList/PathsList';

function render() {
  return (
    <section className={classes.app}>
      <PathsList />
      <section>Path detail</section>
    </section>
  );
}

export default render;
