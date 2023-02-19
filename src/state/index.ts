import { useState } from 'react';
import { restoreSchema } from '../utils/import';
import { OpenAPIV3 } from 'express-openapi-validator/dist/framework/types';

export function useAppState() {
  const [schema, setSchema] = useState<OpenAPIV3.Document | null>(null);
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  function restoreSchemaFromLocalStorage() {
    setSchema(restoreSchema());
  }

  return {
    schema,
    setSchema,
    restoreSchemaFromLocalStorage,
    selectedPath,
    setSelectedPath,
  };
}
