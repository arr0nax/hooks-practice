import React from "react"
import { AppContext } from "../contexts"

export default () => {
  const [ state, dispatch ] = React.useContext(AppContext)

  return (
    <p>{state.charmed ? "I'm charmed!" : "I'm offended!"}</p>
  )
}