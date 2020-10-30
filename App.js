import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import UdaciCards from './src/components/UdaciCards/UdaciCards'
import deckReducer from './store/reducers/decks'

const store = createStore(deckReducer, applyMiddleware(thunk))

export default App = () => {
  return (
    <Provider store={store}>
      <UdaciCards />
    </Provider>
  )
}
