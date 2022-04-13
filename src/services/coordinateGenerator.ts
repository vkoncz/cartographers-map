export function generateCoordinates(dimension: number) {
  const numbers = [...Array(dimension)].map((_, i) => i + 1);
  const alphabet = numbers.map(number => String.fromCharCode(number + 96).toUpperCase());

  return {
    x: numbers.map(String),
    y: alphabet,
  };
}

export function generateCells(dimension: number) {
  const { x, y } = generateCoordinates(dimension);
  const result: string[] = [];

  y.forEach(yLetter => {
    x.forEach(xNumber => {
      result.push(yLetter + xNumber);
    });
  });

  return result;
}
