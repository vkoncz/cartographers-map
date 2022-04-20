import styled from 'styled-components';

export const MapContainer = styled.div<{ dimension: number }>`
  flex: 1;
  margin: 12px;
  display: grid;
  grid-template-columns: repeat(${p => p.dimension}, 1fr);
  grid-template-rows: repeat(${p => p.dimension}, 1fr);
  border-bottom: 2px dashed black;
  border-left: 2px dashed black;
  max-width: 90vh;
`;
