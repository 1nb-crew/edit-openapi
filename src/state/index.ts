import { useState } from 'react';
import { restoreSchema } from '../utils/import';

export function useAppState() {
  const [schema, setSchema] = useState<any>({});

  function restoreSchemaFromLocalStorage() {
    setSchema(restoreSchema());
  }

  return {
    schema,
    setSchema,
    restoreSchemaFromLocalStorage,
  };
}
