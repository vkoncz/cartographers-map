import { GameMap } from '../../components';
import { TerrainPicker } from '../../components/TerrainPicker/TerrainPicker';
import * as s from './GamePage.style';

export function GamePage() {
  return (
    <s.GameContainer>
      <GameMap />
      <TerrainPicker />
    </s.GameContainer>
  );
}
