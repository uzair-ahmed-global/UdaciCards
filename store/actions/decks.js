import * as actionsTypes from './actionTypes'
import * as API from '../../utils/api'

const addDeck = deck => {
  return {
    type: actionsTypes.ADD_DECK,
    deck: deck
  }
}

const addQuestion = (deck, question, ans) => {
  return {
    type: actionsTypes.ADD_QUESTION,
    deck: deck,
    question: question,
    answer: ans
  }
}

const initData = decks => {
  return {
    type: actionsTypes.INIT_DECKS,
    decks: decks
  }
}

export const addDeckStart = (title, postProcess) => {
  return dispatch => {
    API.addDeck(title)
      .then(() => {
        dispatch(addDeck(title))
        postProcess()
      })
  }
}

export const addQuestionStart = (deck, question, answer, postProcess) => {
  return (dispatch) => {
    API.addCardToDeck(deck, question, answer)
      .then(() => {
        dispatch(addQuestion(deck, question, answer))
        postProcess()
      })
  }
}

export const initDataStart = () => {
  return (dispatch) => {
    API.getDecks()
      .then((decks) => {
        dispatch(initData(decks))
      })
  }
}