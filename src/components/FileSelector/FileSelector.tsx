import React, { useContext, useState } from 'react';
import classes from './style.module.css';
import {
  Button,
  Space,
  Typography,
  Upload,
  UploadFile,
  UploadProps,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Props } from './types';
import { AppContext } from '../../views/StartPage/StartPage';

const { Text } = Typography;

function render({ onConfirm }: Props) {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [error, setError] = useState<string>('');

  const appState = useContext(AppContext);

  const props: UploadProps = {
    fileList,
    customRequest: async (fsFile) => {
      setFileList([]);

      const fileListItem: UploadFile = {
        uid: (fsFile.file as File).name || '1',
        name: (fsFile.file as File).name || '1',
        status: 'uploading',
      };

      setFileList([fileListItem]);
      const fileContent = await (fsFile.file as File).text();

      try {
        JSON.parse(fileContent);
        localStorage.setItem('schema', fileContent);
        appState?.restoreSchemaFromLocalStorage();
        setError('');
      } catch (e) {
        setError(e as string);
        setFileList([]);
        return;
      }

      if (fileContent) {
        localStorage.setItem('schema', fileContent);
      }

      setFileList([{ ...fileListItem, status: 'done' }]);
      onConfirm?.();
    },
  };

  return (
    <section className={classes.root}>
      <Space direction="vertical">
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        <div>
          {error ? <Text type="danger">{error.toString()}</Text> : null}
        </div>
      </Space>
    </section>
  );
}

export default render;
