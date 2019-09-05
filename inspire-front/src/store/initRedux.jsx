import React from 'react'

export default function initRedux(reducer, initialState) {
  const StoreContext = React.createContext(null)

  // const DispatchContext = React.createContext(null)

  function Provider(props) {
    const [appState, dispatch] = React.useReducer(reducer, initialState)
    return (
      <StoreContext.Provider value={{ appState, dispatch }}>
        {props.children}
      </StoreContext.Provider>
    )
  }

  function useRedux(extractState, actionMap) {
    const { appState, dispatch } = React.useContext(StoreContext)
    // const dispatch = React.useContext(DispatchContext)

    const stateExtract = extractState(appState)

    const actions = Object.keys(actionMap).reduce((acc, key) => {
      const actionCreator = actionMap[key]
      const fn = (...args) => {
        const action = actionCreator(...args)
        if (typeof action === 'function') {
          action(dispatch, () => appState)
        } else {
          dispatch(action)
        }
      }
      return { ...acc, [key]: fn }
    }, {})

    return [stateExtract, actions]
  }

  return { Provider, useRedux }
}