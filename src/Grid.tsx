import { useState, useEffect } from 'react';
import styles from './Grid.module.css';

interface GridProps {
  grid_width: number;
  grid_height: number;
}

interface Cell {
  color: string;
}

export default function Grid({ grid_width, grid_height}: GridProps) {

  const cells: Cell[] = Array.from({ length: grid_width * grid_height }, () => ({
    color: 'black',
  }));

  return (
    <div
      className={styles.container}
      style={{
        gridTemplateColumns: `repeat(${grid_width}, 1fr)`,
        gridTemplateRows: `repeat(${grid_height}, 1fr)`,
      } as React.CSSProperties}
    >
      {cells.map((cell, i) => (
        <div 
          className={styles.cell} 
          style={{ 
            background: cell.color, 
          }} 
          key={i} />
      ))}
    </div>
  );
}