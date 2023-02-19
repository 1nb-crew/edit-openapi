export function restoreSchema() {
  const stringSchema = localStorage.getItem('schema');

  if (!stringSchema) return {};

  try {
    return JSON.parse(stringSchema);
  } catch (e) {
    return {};
  }
}
