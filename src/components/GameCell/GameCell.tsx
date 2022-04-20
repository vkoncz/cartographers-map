import { forest } from '../../drawings';
import * as s from './GameCell.style';

interface Props {
  coordinate: string;
}

export function GameCell({ coordinate }: Props) {
  return (
    <s.CellContainer>
      <img src={forest} alt="drawing" />
    </s.CellContainer>
  );
}
