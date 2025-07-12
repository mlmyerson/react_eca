import { type JSX, useState, useEffect} from 'react'
import styles from './Grid.module.css';
import * as React from "react";

interface GridProps {
  grid_width: number;
  grid_height: number;
}

export default function Grid({grid_width, grid_height}: GridProps):JSX.Element {


    const [width, setWidth] = useState(grid_width)
    const [height, setHeight] = useState(grid_height)
    const cells = Array.from({length: grid_width * grid_height})


    useEffect((): void => {
        setWidth(grid_width)
        setHeight(grid_height)
    }, [grid_width, grid_height])


    return (
        <div
            className="grid-container"
            style={
                {
                  '--columns': width,
                  '--rows': height,
                } as React.CSSProperties
            }
        >
            {cells.map((_, idx) => (
                <div className={styles.cell} key={idx} />
                ))}
        </div>
    )
}
