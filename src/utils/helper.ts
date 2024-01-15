export const cleanText = (text: string): string => {
  const punctuation = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
  const space = /\s+/g;
  return text.replace(punctuation, '').replace(space, '').toLowerCase();
};
