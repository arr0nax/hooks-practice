import React from "react"
import { AppContext } from "../contexts"

export default () => {
  const [ state, dispatch ] = React.useContext(AppContext)

  return (
    <button onClick={() => dispatch({type: 'toggle_charm'})}>{state.charmed ? "offend" : "charm"}</button>
  )
}