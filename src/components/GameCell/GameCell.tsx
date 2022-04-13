import * as s from './GameCell.style';

interface Props {
  coordinate: string;
}

export function GameCell({ coordinate }: Props) {
  return (
    <s.CellContainer>
      <p>{coordinate}</p>
    </s.CellContainer>
  );
}
