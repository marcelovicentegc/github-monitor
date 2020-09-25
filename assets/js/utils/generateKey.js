export const dec2hex = dec => {
  return `0${dec.toString(16)}`.substr(-2);
};

export const generateKey = length => {
  const array = new Uint8Array((length || 40) / 2);
  return Array.from(array, dec2hex).join('');
};
