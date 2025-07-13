import { type JSX } from 'react'
import './App.css'
import Grid from './Grid'

export default function App(): JSX.Element {

  return (
    <>
        <Grid grid_width={100} grid_height={100} cell_size={40}/>
    </>
  )
}

