import { Button, Space, Typography } from 'antd';
import React from 'react';
import { Props } from './types';
import classes from './style.module.css';

const { Text } = Typography;

function render({ paths, onPathClick }: Props) {
  return (
    <Space direction="vertical">
      {paths
        ? Object.entries(paths).map(([key, value], i) => (
            <Button
              key={key}
              className={classes.path}
              onClick={() => onPathClick?.(key)}
            >
              <Text ellipsis={{ tooltip: key }}>{key}</Text>
            </Button>
          ))
        : null}
    </Space>
  );
}

export default render;
