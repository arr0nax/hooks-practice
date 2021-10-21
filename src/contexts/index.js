import React from "react"
import { buttonReducer, initialButtonState } from "./button/reducer"
import { charmReducer, initialCharmState } from "./charm/reducer"

const combineReducers = (...reducers) => 
  (state, action) => 
    reducers.reduce((newState, reducer) =>
         reducer(newState, action), state)

const appReducer = combineReducers(
  buttonReducer,
  charmReducer
)

// BE CAREFUL !!! CANNOT HANDLE NESTED STATE !!! WILL OVERWRITE DUPLICATE KEYS BETWEEN REDUCERS !!!
const initialAppState = {
  ...initialButtonState,
  ...initialCharmState
}

export const AppContext = React.createContext({
  state: initialAppState,
  dispatch: () => null
})

export const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(appReducer, initialAppState)

  React.useEffect(() => {
    console.log('pinned state', state);
  }, [state]);

  return (
    <AppContext.Provider value={[ state, dispatch ]}>
    	{ children }
    </AppContext.Provider>
  )
}