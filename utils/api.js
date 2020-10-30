import { AsyncStorage } from 'react-native'

const data = {
  'Deck': {
    title: 'Deck',
    questions: [{ question: 'What is orange?', answer: 'A colour' }],
  },
  'Another Deck': {
    title: 'Another Deck',
    questions: [{ question: 'How long is the wall of china?', answer: 'idk' }],
  },
}

export const init = async () => {
  await AsyncStorage.setItem('FlashCards', JSON.stringify(data))
  return 1
}

export const getDecks = async () => {
  const decks = await AsyncStorage.getItem('FlashCards')
  return JSON.parse(decks)
}

export const getDeck = async title => {
  const deck = await getDecks()
  return deck[title]
}

export const addCardToDeck = async (title, question, ans) => {
  const newCard = {
    question: question,
    answer: ans,
  }
  const deck = await getDeck(title)
  deck.questions.push(newCard)
  await AsyncStorage.mergeItem('FlashCards', JSON.stringify({ [title]: deck }))
  return await getDeck(title)
}

export const addDeck = async title => {
  await AsyncStorage.mergeItem('FlashCards', JSON.stringify({ [title]: { title: title, questions: [] } }))
}
