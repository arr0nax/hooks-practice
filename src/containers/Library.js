
import React from "react"
import { AppContext } from "../contexts"
import OnOffDisplay from "../components/OnOffDisplay"
import CharmedDisplay from "../components/CharmedDisplay"
import CharmButton from "../components/CharmButton"

export default () => {
  const [ state, dispatch ] = React.useContext(AppContext)

  return (
    <>
        <CharmedDisplay />
        <CharmButton />
      <OnOffDisplay />
      <button onClick={() => dispatch({ type: "toggle_button" })}>
        { state.active ? "On" : "Off" }  
      </button>
    </>
  )
}