/**
 * These are modules that can be used inside of documentation
 * to provide more enriching examples. The purpose of keeping
 * these functions in this file is to abstract away unnecessary
 * implementation details for setting up an example in an effort
 * to focus more on the component's usage itself.
 * 
 * @example using the randomColors in documentation
 * const randomColors = mockImport('randomColors');
 * randomColors.get().then(randomColors => // use random colors);
 */
const modules = {
  randomColors: (function() {
    const getHex = (num) => num.toString(16).padStart(2, '0');
    const getRandomRgb = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return {r, g, b};
    };
    const rgbToHex = ({r, g, b}) => {
      const rHex = getHex(r), gHex = getHex(g), bHex = getHex(b);
      return '#' + rHex + gHex + bHex;
    };
    const generateRandomColors = (maxColors = 25) => {
      const colors = [];
      for (let i = 0; i <= maxColors - 1; i++) {
        const rgb = getRandomRgb();
        const hex = rgbToHex(rgb);
        colors.push({
          ...rgb,
          hex,
        });
      };
      return colors;
    };
    const get = (num = 25) => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(generateRandomColors(num)), 1000);
      });
    };
    return { get };
  })(),
}

function mockImport(moduleName) {
  const requestedModule = modules[moduleName];
  if (!requestedModule) {
    throw new Error(`Mock module "${moduleName}" was not found.`);
  }
  return requestedModule;
}

export default mockImport;
