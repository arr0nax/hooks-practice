export const charmReducer = (state, action) => {
    switch (action.type) {
      case "toggle_charm":
        return {
          ...state,
          charmed: !state.charmed
        }
  
      default:
        return state
    }
  }
  
  export const initialCharmState = {
    charmed: false
  }