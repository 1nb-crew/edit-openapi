import React from 'react';
import classes from './style.module.css';
import { Button } from 'antd';

function render() {
  return (
    <section className={classes.root}>
      Select file <Button type="primary">...</Button>
    </section>
  );
}

export default render;
