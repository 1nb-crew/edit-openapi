import { test, expect } from 'vitest';
import { restoreSchema } from './restoreSchema';

test('reads schema in JSON format from localStorage', async () => {
  const mockSchema = { example: 'data' };
  localStorage.setItem('schema', JSON.stringify(mockSchema));

  const schema = restoreSchema();
  expect(schema).toStrictEqual(mockSchema);
});

test('returns an empty object if the localStorage is empty', async () => {
  localStorage.clear();

  const schema = restoreSchema();
  expect(schema).toStrictEqual({});
});

test('returns an empty object if the stored schema is not valid JSON', async () => {
  localStorage.setItem('schema', 'notaJSONstring');

  const schema = restoreSchema();
  expect(schema).toStrictEqual({});
});
