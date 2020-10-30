import React from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity } from 'react-native'

import styleSheet from './styles'


const Deck = props => {

  const addCardNavigationHandler = () => {
    props.navigation.navigate('AddCard', { deck: props.deck.title })
  }

  const quizNavigationHandler = () => {
    props.navigation.navigate('Quiz', { cards: props.deck.questions })
  }

  let view = null
  if (props.deck) {
    view = (
      <View>
        <Text style={styleSheet.title}>{props.deck.title}</Text>
        <Text style={styleSheet.subtext}>
          Cards: {props.deck && props.deck.questions.length}
        </Text>
        <TouchableOpacity onPress={addCardNavigationHandler}>
          <View style={styleSheet.button}>
            <Text style={styleSheet.buttonText}>Add Card</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={quizNavigationHandler}>
          <View style={styleSheet.button}>
            <Text style={styleSheet.buttonText}>Attempt Quiz</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styleSheet.view}>
      {view}
    </View>
  )
}

const mapStateToProps = (state, props) => {
  return {
    deck: state.decks[props.route.params.deck]
  }
}
export default connect(mapStateToProps)(Deck)