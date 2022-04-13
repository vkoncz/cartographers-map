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

  return y.reduce((points, yLetter) => {
    x.forEach(xNumber => points.push(yLetter + xNumber));
    return points;
  }, [] as string[]);
}
