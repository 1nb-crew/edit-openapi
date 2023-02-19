import { OpenAPIV3 } from 'express-openapi-validator/dist/framework/types';

export interface Props {
  paths?: OpenAPIV3.Document['paths'];
  onPathClick?: (path: string) => void;
}
