import React, { useContext, useState } from 'react';
import classes from './style.module.css';
import { Button, Drawer } from 'antd';
import FileSelector from '../../../components/FileSelector/FileSelector';
import { AppContext } from '../StartPage';

function render() {
  const [isImportShown, setIsImportShown] = useState(false);
  const appState = useContext(AppContext);

  const handleButtonClick = () => {
    setIsImportShown(true);
  };

  const handleFileLoad = () => {
    setIsImportShown(false);
  };

  return (
    <section className={classes.root}>
      <div>
        <Button type="primary" onClick={handleButtonClick}>
          Import from file
        </Button>
        <div>{appState?.schema.openapi}</div>
        {isImportShown ? (
          <Drawer
            open={true}
            placement="left"
            onClose={() => setIsImportShown(false)}
          >
            <FileSelector onConfirm={handleFileLoad}></FileSelector>
          </Drawer>
        ) : null}
      </div>
    </section>
  );
}

export default render;
