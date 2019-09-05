import initRedux from './initRedux'
import initial from './initial'
const Reducer = (state, action) => {
  if (action.name === 'setVisitor') {
    state.header = { visitor: action.value }
  }
  return { ...state }
}

const { Provider, useRedux } = initRedux(Reducer, initial)

export { Provider, useRedux }