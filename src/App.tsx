import { type JSX } from 'react'
import './App.css'
import Grid from './Grid'

export default function App(): JSX.Element {

  return (
    <>
        <p>
            Hello!
        </p>
        <Grid grid_width={100} grid_height={100}/>
    </>
  )
}

