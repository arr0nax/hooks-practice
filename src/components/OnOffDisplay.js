import React from "react"
import { AppContext } from "../contexts"

export default () => {
  const [ state, dispatch ] = React.useContext(AppContext)

  return (
    <p>{state.active ? "I'm on!" : "I'm off!"}</p>
  )
}