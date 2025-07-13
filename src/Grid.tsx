import { useState, useEffect } from 'react';
import styles from './Grid.module.css';

interface GridProps {
  grid_width: number;
  grid_height: number;
  cell_size: number;
}

interface Cell {
  color: string;
}

export default function Grid({ grid_width, grid_height, cell_size }: GridProps) {
  const [width, setWidth] = useState(grid_width);
  const [height, setHeight] = useState(grid_height);
  const [cellSize, setCellSize] = useState(cell_size);

  //intialize cells
 const cells: Cell[] = Array.from({ length: width * height }, () => ({
    color: 'black',
  }));

  return (
    <div
      className={styles.container}
      style={{
        '--columns': width,
        '--rows': height,
      } as React.CSSProperties}
    >
      {cells.map((cell, i) => (
        <div 
          className={styles.cell} 
          style={{ 
            background: cell.color, 
            width: `${cellSize}px`,
            height: `${cellSize}px`
          }} 
          key={i} />
      ))}
    </div>
  );
}