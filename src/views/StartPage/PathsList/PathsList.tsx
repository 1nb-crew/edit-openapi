import React, { useContext, useState } from 'react';
import classes from './style.module.css';
import { Button, Drawer, Space } from 'antd';
import FileSelector from '../../../components/FileSelector/FileSelector';
import { AppContext } from '../StartPage';
import ApiPaths from './components/ApiPaths/ApiPaths';

function render() {
  const [isImportShown, setIsImportShown] = useState(false);
  const appState = useContext(AppContext);

  const handleButtonClick = () => {
    setIsImportShown(true);
  };

  const handleFileLoad = () => {
    setIsImportShown(false);
  };

  const handlePathClick = (path: string) => {
    appState?.setSelectedPath(path);
  };

  return (
    <Space direction="vertical" className={classes.root}>
      <Button type="primary" onClick={handleButtonClick}>
        Import from file
      </Button>
      <div className={classes.divider}></div>
      <ApiPaths
        paths={appState?.schema?.paths}
        onPathClick={handlePathClick}
      ></ApiPaths>

      {isImportShown ? (
        <Drawer
          data-testid="import-schema-drawer"
          open={true}
          placement="left"
          onClose={() => setIsImportShown(false)}
        >
          <FileSelector onConfirm={handleFileLoad}></FileSelector>
        </Drawer>
      ) : null}
    </Space>
  );
}

export default render;
