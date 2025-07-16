import { type JSX } from 'react'
import './App.css'
import Grid from './Grid'
import SettingsMenu from './SettingsMenu'

export default function App(): JSX.Element {

  return (
    <div className={"App"}>
      <SettingsMenu />
      <Grid grid_width={10} grid_height={10} />
    </div>
  )
}

