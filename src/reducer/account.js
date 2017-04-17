const initialState = {
  user: {},
  loginState: false
}

export default accountReducer(initialState);

function accountReducer(initialState) {
  if(initialState) {
    return function accountReducerFn (state = initialState, action = {}) {
      switch (action.type) {
        case "1": {

        }
        default: {
          return {
            ...state
          }
        }
      }
    }
  }
}
