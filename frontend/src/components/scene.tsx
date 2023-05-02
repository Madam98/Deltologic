import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Props } from '../types/instances'

const boxArgs = [2, 1, 1];
const edgesGeometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(...boxArgs));
const Box = ({ x, y, z }: { x: number; y: number; z: number }) => {
  return (
    <mesh position={[x, y, z]}>
      <boxBufferGeometry args={boxArgs} />
      <meshStandardMaterial color="gray" />
      <lineSegments geometry={edgesGeometry}>
        <lineBasicMaterial color="white" linewidth={2} />
      </lineSegments>
    </mesh>
  );
};

const Surface = ({ surface }: Props) => {
  const cubes: JSX.Element[] = [];
  const water: JSX.Element[] = [];
  const surfaceLength = surface.length;

  //SKALOWANIE X [-polowa/mask do polowa/maks] na osi
  const rowWidth = surfaceLength * boxArgs[0]; // Szerokość wiersza
  let rowStartX = -rowWidth + boxArgs[0]; // Początkowa pozycja X wiersza
  rowStartX = rowStartX / 2;
  //SKALOWANIE Y [maksymalna wysokość] na osi
  const maxSurfaceValue = Math.max(...surface);
  let columnHeight = -(maxSurfaceValue - 1) * boxArgs[1];
  columnHeight = columnHeight / 2;

  const exportRowStartX = rowStartX;
  const exportColumnHeight = columnHeight;
  const distance = -(Math.sqrt(rowStartX ** 2 + columnHeight ** 2));
  let z = distance;

  // Tworzenie klocków powierzchni
  surface.forEach((surfaceIndex, i) => {
    for (let j = 0; j < surfaceIndex; j++) {
      const posX = rowStartX;
      const posY = columnHeight + j * boxArgs[1]; // Obliczenie pozycji Y kostki
      cubes.push(<Box key={`${i}-${j}`} x={posX} y={posY} z={z} />);
    }
    rowStartX += boxArgs[0];
  });
  return {
    exportRowStartX,
    exportColumnHeight,
    elements: (
      <> {cubes} {water}</>
    ),
  };
};

const Scene = ({ surface, waterBlocks }: Props) => {
  const { elements, exportRowStartX, exportColumnHeight } = Surface({ surface, waterBlocks });
  const waterPositions = waterBlocks;
  const distance = -(Math.sqrt(exportRowStartX ** 2 + exportColumnHeight ** 2));
  return (
    <Canvas style={{ width: '100%', height: '30vh' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <group scale={[1, 1, 1]}>
        {elements}
        {waterPositions.map(([x, y], i) => (
          <mesh position={[2*(x + exportRowStartX/2), y + exportColumnHeight, distance]} key={`water-${i}`}>
            <boxBufferGeometry args={boxArgs} />
            <meshStandardMaterial color="#009999" transparent opacity={0.8} wireframe={false} />
          </mesh>
        ))}
      </group>
    </Canvas>
  );
};

export default Scene;
