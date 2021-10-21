export const buttonReducer = (state, action) => {
    switch (action.type) {
      case "toggle_button":
        return {
          ...state,
          active: !state.active
        }
  
      default:
        return state
    }
  }
  
  export const initialButtonState = {
    active: false
  }