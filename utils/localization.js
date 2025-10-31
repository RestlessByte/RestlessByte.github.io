export const getLocalizedText = (value, lang) => {
  if (typeof value === 'string') {
    return value;
  }
  if (!value) {
    return '';
  }
  return value[lang] ?? value.en ?? value.ru ?? '';
};
