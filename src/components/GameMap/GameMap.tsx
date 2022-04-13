import { generateCells } from '../../services';
import { GameCell } from '../GameCell/GameCell';
import * as s from './GameMap.style';

const coordinates = generateCells(11);

export function GameMap() {
  return (
    <s.MapContainer>
      {coordinates.map(coordinate => (
        <GameCell key={coordinate} coordinate={coordinate} />
      ))}
    </s.MapContainer>
  );
}
