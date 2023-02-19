import React, { useState } from 'react';
import classes from './style.module.css';
import { Button, Drawer } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import FileSelector from '../../../components/FileSelector/FileSelector';

function render() {
  const [isImportShown, setIsTooltipShown] = useState(false);

  const handleButtonClick = () => {
    setIsTooltipShown(true);
  };

  return (
    <section className={classes.root}>
      <div>
        <Button
          icon={<PlusOutlined />}
          type="primary"
          onClick={handleButtonClick}
        ></Button>
        <Drawer
          visible={isImportShown}
          placement="left"
          onClose={() => setIsTooltipShown(false)}
        >
          <FileSelector></FileSelector>
        </Drawer>
      </div>
    </section>
  );
}

export default render;
