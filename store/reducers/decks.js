import * as actionTypes from '../actions/actionTypes'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_DECK:
      return {
        ...state,
        'decks': {
          ...state.decks,
          [action.deck]: {
            title: action.deck,
            questions: []
          }
        }
      }
    case actionTypes.ADD_QUESTION:
      return {
        ...state,
        'decks': {
          ...state.decks,
          [action.deck]: {
            ...state[action.deck],
            questions: [
              ...state['decks'][action.deck]['questions'],
              {
                question: action.question,
                answer: action.answer
              }
            ],
            'title': action.deck
          }
        }
      }
    case actionTypes.INIT_DECKS:
      return {
        ...state,
        decks: deepCopyObject(action.decks)   
      }
    default:
      return state
  }
}

const deepCopyObject = (obj) => JSON.parse(JSON.stringify(obj))

export default reducer