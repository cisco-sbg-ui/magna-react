export const hexToRgb = (hex: string) => {
  const rValue = parseInt(hex.substring(0, 2), 16);
  const gValue = parseInt(hex.substring(2, 4), 16);
  const bValue = parseInt(hex.substring(4), 16);
  return `rgb(${rValue}, ${gValue}, ${bValue})`;
};
