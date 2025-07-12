import { useState, useEffect } from 'react';
import styles from './Grid.module.css';

interface GridProps {
  grid_width: number;
  grid_height: number;
}

export default function Grid({ grid_width, grid_height }: GridProps) {
  const [width, setWidth] = useState(grid_width);
  const [height, setHeight] = useState(grid_height);
  const cells = Array.from({ length: width * height });

  useEffect(() => {
    setWidth(grid_width);
    setHeight(grid_height);
  }, [grid_width, grid_height]);

  return (
    <div
      className={styles.container}
      style={{
        '--columns': width,
        '--rows': height,
      } as React.CSSProperties}
    >
      {cells.map((_, idx) => (
        <div className={styles.cell} key={idx} />
      ))}
    </div>
  );
}