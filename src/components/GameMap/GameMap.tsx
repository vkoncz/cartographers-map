import { generateCells } from '../../services';
import { GameCell } from '../GameCell/GameCell';
import * as s from './GameMap.style';

const dimension = 11;
const coordinates = generateCells(dimension);

export function GameMap() {
  return (
    <s.MapContainer dimension={dimension}>
      {coordinates.map(coordinate => (
        <GameCell key={coordinate} coordinate={coordinate} />
      ))}
    </s.MapContainer>
  );
}
