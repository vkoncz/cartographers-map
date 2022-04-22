import * as terrains from '../../drawings';
import * as s from './TerrainPicker.style';

export function TerrainPicker() {
  return (
    <s.TerrainContainer>
      {Object.entries(terrains).map(([terrain, draw]) => (
        <img key={terrain} src={draw} alt={terrain} />
      ))}
    </s.TerrainContainer>
  );
}
