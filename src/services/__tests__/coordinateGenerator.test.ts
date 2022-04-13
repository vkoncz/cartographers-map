import { generateCells, generateCoordinates } from '../coordinateGenerator';

describe('coordinateGenerator', () => {
  it('should generate values for both axis', () => {
    const result = generateCoordinates(4);

    expect(result).toStrictEqual({
      x: ['1', '2', '3', '4'],
      y: ['A', 'B', 'C', 'D'],
    });
  });

  it('should generate cell values', () => {
    const result = generateCells(4);

    expect(result).toEqual([
      'A1',
      'A2',
      'A3',
      'A4',
      'B1',
      'B2',
      'B3',
      'B4',
      'C1',
      'C2',
      'C3',
      'C4',
      'D1',
      'D2',
      'D3',
      'D4',
    ]);
  });
});
